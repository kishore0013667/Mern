import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    dispatch({ type: "RESET_FORM" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        value={state.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}