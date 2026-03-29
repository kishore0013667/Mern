// HOC
const withAlert = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      alert("Button clicked from HOC");
    };

    return <WrappedComponent handleClick={handleClick} {...props} />;
  };
};

// Component
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

export default withAlert(Button);