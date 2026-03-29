const withDisable = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent isDisabled={true} {...props} />;
  };
};

// Component
function Button({ isDisabled }) {
  return <button disabled={isDisabled}>Submit</button>;
}

export default withDisable(Button);