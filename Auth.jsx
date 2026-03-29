const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      return <h1>Access Denied</h1>;
    }

    return <WrappedComponent {...props} />;
  };
};

// Component
function Dashboard() {
  return <h1>Welcome to Dashboard</h1>;
}

export default withAuth(Dashboard);