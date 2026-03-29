const withTitle = (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent
        title="HOC Modified Text"
        {...props}
      />
    );
  };
};

// Component
function TitleComponent({ title }) {
  return <h1>{title}</h1>;
}

export default withTitle(TitleComponent);