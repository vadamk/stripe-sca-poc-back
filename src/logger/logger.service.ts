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

  async getAll(): Promise<Record[]> {
    return this.recordModel.find({});
  }
}
