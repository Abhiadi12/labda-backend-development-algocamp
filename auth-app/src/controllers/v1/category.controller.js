function pingCategoryController(req, res) {
  return res.json({ message: "Category controller is up" });
}

module.exports = { pingCategoryController };
