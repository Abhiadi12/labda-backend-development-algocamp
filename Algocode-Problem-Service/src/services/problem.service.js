const NotFound = require("../error/notFound.error");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
    //# this way we can loosely coupled with the DAO layer
    //# no need to know the layer of the DB(sql, noSql)
  }

  async createProblem(problemData) {
    try {
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );
      console.log("problem data", problemData);
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);
    return problem;
  }

  async deleteProblem(id) {
    try {
      const problem = await this.ProblemRepository.deleteProblem(id);
      if (!problem) throw new NotFound("problem", id);
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(id, updatedData) {
    try {
      const updatedProblem = await this.problemRepository.updateProblem(
        id,
        updatedData
      );
      if (!updatedProblem) throw new NotFound("Problem", id);
      return updatedData;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemService;
