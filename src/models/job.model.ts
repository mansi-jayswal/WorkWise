import mongoose, { Document, Model, Schema } from 'mongoose';
import { EmploymentType, WorkMode } from '../../src/constants/enums';

interface IJob extends Document {
  companyName: string;
  position: string;
  salary: number;
  location: string;
  employmentType: EmploymentType;
  workMode: WorkMode;
  description: string;
  tags?: string[];
}

const jobSchema: Schema<IJob> = new mongoose.Schema({
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
    type: String,
    enum: Object.values(EmploymentType),
    required: true,
  },
  workMode: {
    type: String,
    enum: Object.values(WorkMode),
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
});

// Create the Job model
const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>('Job', jobSchema);

export default Job;
