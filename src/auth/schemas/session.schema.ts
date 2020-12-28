import { Schema } from 'mongoose';

export const SessionSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'EMAIL_IS_BLANK'],
    },
    code: {
      type: String,
      required: [true, 'CODE_IS_BLANK'],
    },
    pushToken: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
