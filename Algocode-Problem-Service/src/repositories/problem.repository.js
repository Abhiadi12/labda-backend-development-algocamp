const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const { title, description, testCases } = problemData;
      let checkTestCases = testCases ? testCases : [];
      const problem = await Problem.create({
        title,
        description,
        checkTestCases,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw err;
    }
  }
}

module.exports = ProblemRepository;
