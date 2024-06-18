function pingTaskController(req, res) {
  return res.json({ message: "Task controller is up" });
}

module.exports = { pingTaskController };
