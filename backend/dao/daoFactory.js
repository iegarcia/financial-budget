import OperationsDAODatabase from "./daoOperationsDatabase.js";

class OperationDAOFactory {
  static getDao() {
    return new OperationsDAODatabase();
  }
}

export default OperationDAOFactory;
