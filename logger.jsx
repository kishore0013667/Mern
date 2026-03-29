const withLogger = (WrappedComponent) => {
  return (props) => {
    const handleChange = (e) => {
      console.log(e.target.value);
    };

    return <WrappedComponent handleChange={handleChange} {...props} />;
  };
};

// Component
function InputBox({ handleChange }) {
  return <input onChange={handleChange} />;
}

export default withLogger(InputBox);