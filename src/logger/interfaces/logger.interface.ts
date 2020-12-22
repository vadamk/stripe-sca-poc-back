import { Document } from 'mongoose';

export interface Record extends Document {
  id: string;
  name: string;
  startTime: number;
  value: string;
  label: string;
  location: string;
  dev: boolean;
}
