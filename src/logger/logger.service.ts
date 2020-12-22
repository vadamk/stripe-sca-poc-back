import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PushRecordDto } from './dto/logger.dto';
import { Record } from './interfaces/logger.interface';

@Injectable()
export class LoggerService {
  constructor(
    @InjectModel('Record') private readonly recordModel: Model<Record>,
  ) {}

  async create(pushRecordDto: PushRecordDto): Promise<Record> {
    const record = new this.recordModel(pushRecordDto);
    await record.save();
    return record;
  }

  async getAll({ from, to, name, dev }): Promise<Record[]> {
    await this.recordModel.remove({
      createdAt: { $lte: new Date('2020-12-18T11:42:54.498+00:00') },
    });

    if (!from && !to) {
      return this.recordModel.find({});
    }

    if (!name) {
      return this.recordModel.find({
        createdAt: {
          $gte: new Date(from),
          $lt: new Date(to),
        },
      });
    }

    const boolDev =
      typeof dev === 'string' ? (dev === 'true' ? true : false) : dev;

    return this.recordModel.find({
      name,
      dev: { $in: boolDev ? [boolDev] : [false, null] },
      createdAt: {
        $gte: new Date(from),
        $lt: new Date(to),
      },
    });
  }
}
