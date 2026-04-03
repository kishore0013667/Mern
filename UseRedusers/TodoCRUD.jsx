import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
  editIndex: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.index),
      };

    case "EDIT_TODO":
      return {
        ...state,
        editIndex: action.index,
      };

    case "UPDATE_TODO":
      const updatedTodos = state.todos.map((todo, i) =>
        i === state.editIndex ? action.payload : todo
      );

      return {
        todos: updatedTodos,
        editIndex: null,
      };

    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;

    if (state.editIndex !== null) {
      dispatch({ type: "UPDATE_TODO", payload: input });
    } else {
      dispatch({ type: "ADD_TODO", payload: input });
    }

    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAdd}>
        {state.editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button
              onClick={() => {
                setInput(todo);
                dispatch({ type: "EDIT_TODO", index });
              }}
            >
              Edit
            </button>

            <button
              onClick={() => dispatch({ type: "DELETE_TODO", index })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}