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

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async getProblemById(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) throw new NOT_FOUND("Problem", id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deleteProblem = await Problem.findByIdAndDelete(id);
      return deleteProblem;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(id, payload) {
    try {
      //{new: true} return the updated tuple after the update operation.
      const updatedProblem = await Problem.findByIdAndUpdate(id, payload, {
        new: true,
      });
      return updatedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
