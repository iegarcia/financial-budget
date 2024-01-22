import Operation from "../models/Operation.js";

class OperationApi {
  async getOperations() {
    try {
      const operations = await Operation.findAll();

      return operations;
    } catch (error) {
      console.error(error);
    }
  }

  async addOperation(register) {
    try {
      const addRegister = await Operation.create(register);
      console.log("Operation added", addRegister);
    } catch (error) {
      console.error("Error al crear la operación:", error);
    }
  }
}

export default OperationApi;
