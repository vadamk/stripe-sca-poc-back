import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { RecordSchema } from './schemas/logger.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Record', schema: RecordSchema }]),
  ],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
