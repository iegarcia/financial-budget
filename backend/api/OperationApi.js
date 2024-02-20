import OperationDAOFactory from "../dao/daoFactory.js";

class OperationApi {
  constructor() {
    this.operationsDAO = OperationDAOFactory.getDao();
  }
  async getLatestOperations() {
    try {
      const operations = this.operationsDAO.getData();
      return operations;
    } catch (error) {
      console.error(error);
    }
  }

  async addOperation(register) {
    try {
      const addRegister = await this.operationsDAO.add(register);
      return addRegister;
    } catch (error) {
      console.error("Error al crear la operación:", error);
    }
  }
  async updateOperation(register) {
    try {
      await this.operationsDAO.update(register);
    } catch (error) {
      console.error("Error al crear la operación:", error);
    }
  }

  async deleteOperation(id) {
    try {
      await this.operationsDAO.delete(id);
    } catch (error) {
      console.error(error);
    }
  }

  async getBalance() {
    try {
      const balance = await this.operationsDAO.balance();
      return balance;
    } catch (error) {
      console.error(error);
    }
  }
}

export default OperationApi;
