const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Munna",
    email: "munna@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Jonathan",
    email: "jonathan@gmail.com",
  },
];

module.exports = users;
