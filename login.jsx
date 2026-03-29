const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
(u) =>
    u.email === form.email && u.password === form.password
);

if (user) {
localStorage.setItem("isLoggedIn", true);
navigate("/dashboard");
} else {
alert("Invalid Credentials");
}