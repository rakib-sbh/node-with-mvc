const path = require("path");

const { users } = require("../models/user.model");

const rootController = (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/userForm.view.html"));
};

const userPostController = (req, res) => {
  const { fullName, email } = req.body;

  const user = {
    name: fullName,
    email,
  };

  users.push(user);

  res.json({
    success: true,
    users,
  });
};

const userGetController = (req, res) => {
  res.send("Hello Users");
};

module.exports = { rootController, userPostController, userGetController };
