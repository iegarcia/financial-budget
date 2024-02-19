import { Op } from "sequelize";
import Operation from "../models/Operation.js";
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
      const addRegister = await Operation.create(register);
      return addRegister;
    } catch (error) {
      console.error("Error al crear la operación:", error);
    }
  }
  async updateOperation(register) {
    try {
      const oldRegister = await Operation.update(
        {
          concept: register.concept,
          amount: register.amount,
          date: register.date,
        },
        {
          where: {
            id: { [Op.eq]: register.id },
          },
          returning: true,
        }
      );
    } catch (error) {
      console.error("Error al crear la operación:", error);
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
