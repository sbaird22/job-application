import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export interface JobAttributes {
  id?: number;
  title: string;
  company: string;
  status: string; // e.g., "applied", "interviewing", "offer", "rejected"
  appliedDate: Date;
  notes?: string;
}

export class Job extends Model<JobAttributes> implements JobAttributes {
  public id!: number;
  public title!: string;
  public company!: string;
  public status!: string;
  public appliedDate!: Date;
  public notes?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "applied",
    },
    appliedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "jobs",
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

export default Job;
