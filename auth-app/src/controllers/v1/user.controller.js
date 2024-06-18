const bcrypt = require("bcryptjs");
const User = require("../../models/user");

function pingUserController(req, res) {
  return res.json({ message: "User controller is up" });
}

async function signup(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Unable to signup currently." });
  }
}

async function signin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  //INFO: implement the JWT token logic
  res.status(200).json({ message: "Login Successfully", token: "ABCD" });
}
module.exports = { pingUserController, signup, signin };
