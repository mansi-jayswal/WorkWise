import mongoose, { Document, Model, Schema } from 'mongoose';
import { EmploymentType, WorkMode } from '../../src/constants/enums';

interface IJob extends Document {
  companyName: string;
  location: string;
  position: string;
  salary: number;
  employmentType: EmploymentType[]; //full time or  part time or internship
  workMode: WorkMode; // wfo , wfh , hybrid
  description: string;
  tags?: string[];
  companyLogo?: string;
  createdAt: Date;
  updatedAt: Date;
}

const jobSchema: Schema<IJob> = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    employmentType: {
      type: [String],
      required: true,
    },
    workMode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
      required: false,
    },
    companyLogo: {
      type: String,
      default: '',
      required: false,
    },
  },
  { timestamps: true },
);

// Create the Job model
const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>('Job', jobSchema);

export default Job;
