const users = [
  {
    id: 1,
    username: "bsmithw3",
    email: "bsmith@mail.com",
    password: "bsmithw3_2023",
    name: "Brandon Smith",
  },
  {
    id: 2,
    username: "swoow3",
    email: "swoo@mail.com",
    password: "swoo_w3schools",
    name: "Samantha Woo",
  },
];

function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    return "Login successful";
  } else {
    return "Login failed";
  }
}

function register(newUser) {
  const requiredFields = ["username", "email", "password", "name"];
  const missingFields = requiredFields.filter((field) => !(field in newUser));
  if (missingFields.length > 0) {
    return `Missing fields: ${missingFields.join(", ")}`;
  }
  const existingUser = users.find(
    (user) => user.username === newUser.username || user.email === newUser.email
  );
  if (existingUser) {
    return "Username or email already exists";
  }
  const newId = users.length + 1;
  const user = { id: newId, ...newUser };
  users.push(user);
  return "User created successfully";
}

module.exports = { login, register };
