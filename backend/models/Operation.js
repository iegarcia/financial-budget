import { DataTypes } from "sequelize";
import { db } from "../db/database.js";

const Operation = db.define("Operation", {
  concept: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  operationType: {
    type: DataTypes.ENUM("ingreso", "egreso"),
    allowNull: false,
  },
});

Operation.sync({ force: false }).then(() => {
  console.log("Tabla de operaciones sincronizada con la base de datos");
});

export default Operation;
