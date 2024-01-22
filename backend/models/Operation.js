import { DataTypes } from "sequelize";
import { db } from "../db/database.js";

const Operation = db.define("Operation", {
  Concept: {
    type: DataTypes.STRING,
  },
  Amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  OperationType: {
    type: DataTypes.ENUM("ingreso", "egreso"),
    allowNull: false,
  },
});

Operation.sync({ force: false }).then(() => {
  console.log("Tabla de operaciones sincronizada con la base de datos");
});

export default Operation;
