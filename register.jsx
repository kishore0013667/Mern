const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(form);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered Successfully");
};