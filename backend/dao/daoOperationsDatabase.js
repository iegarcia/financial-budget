import { Op, Sequelize } from "sequelize";
import { db } from "../db/database.js";
import OperationDao from "./daoOperations.js";
import Operation from "../models/Operation.js";

class OperationsDAODatabase extends OperationDao {
  constructor() {
    super();
    this.operations = [];
  }

  async getData() {
    try {
      const data = await db.query(
        "SELECT op.id, op.Concept, op.Amount, op.Date, op.OperationType FROM operations op ORDER BY op.createdAt DESC LIMIT 10",
        { type: Sequelize.QueryTypes.SELECT }
      );
      this.operations = data;
      return this.operations;
    } catch (error) {
      console.error(error);
    }
  }

  async add(data) {
    try {
      const addRegister = await Operation.create(data);
      console.log("Operation added", addRegister);
    } catch (error) {
      console.error("Error al crear la operación:", error);
    }
  }

  async update(register) {
    try {
      await Operation.update(
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
      alert(error);
      console.error("Error al crear la operación:", error);
    }
  }

  async delete(operationId) {
    try {
      const rowsDeleted = await Operation.destroy({
        where: {
          id: operationId,
        },
      });

      console.log(`${rowsDeleted} registro(s) eliminado(s)`);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  }

  async balance() {
    try {
      const resultado = await Operation.findOne({
        attributes: [
          [
            Sequelize.fn(
              "SUM",
              Sequelize.literal(
                "CASE WHEN OperationType = 'egreso' THEN Amount ELSE 0 END"
              )
            ),
            "total_egresos",
          ],
          [
            Sequelize.fn(
              "SUM",
              Sequelize.literal(
                "CASE WHEN OperationType = 'ingreso' THEN Amount ELSE 0 END"
              )
            ),
            "total_ingresos",
          ],
        ],
      });

      const { total_egresos, total_ingresos } = resultado.dataValues;
      return total_ingresos - total_egresos;
    } catch (error) {
      console.error(error);
    }
  }
}

export default OperationsDAODatabase;
