import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Job = sequelize.define("Job", {
  companyName: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  notes: { type: DataTypes.TEXT },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

export default Job;
