import { Document } from 'mongoose';

export interface Session extends Document {
  email: string;
  code: string;
  isActive: boolean;
}
