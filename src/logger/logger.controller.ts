import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { LoggerService } from './logger.service';
import { PushRecordDto } from './dto/logger.dto';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async push(@Body() pushRecordDto: PushRecordDto) {
    return this.loggerService.create(pushRecordDto);
  }

  @Get()
  async getAll(@Query() query) {
    return this.loggerService.getAll(query);
  }
}
