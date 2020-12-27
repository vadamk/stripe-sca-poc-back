import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'EMAIL_IS_BLANK'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
