import { Schema } from 'mongoose';

export const RecordSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'NAME_IS_BLANK'],
    },
    label: {
      type: String,
      required: [true, 'LABEL_IS_BLANK'],
    },
    value: {
      type: String,
      required: [true, 'VALUE_IS_BLANK'],
    },
    startTime: {
      type: Number,
      required: [true, 'START_TIME_IS_BLANK'],
    },
    location: {
      type: String,
      required: [true, 'LOCATION_IS_BLANK'],
    },
    dev: {
      type: Boolean,
      required: [true, 'DEV_IS_BLANK'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
