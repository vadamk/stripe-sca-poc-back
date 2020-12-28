import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Session } from './interfaces/session.interface';
import { User } from './interfaces/user.interface';
import { LoginDto, LogoutDto, GetCodeDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Session') private readonly sessionModel: Model<Session>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async getCode({ email }: GetCodeDto): Promise<any> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // generate XXXX number
    const code = String(Math.random() * 10)
      .replace('.', '')
      .substr(0, 4);

    await this.sessionModel.updateOne(
      { email },
      { email, code, isActive: false },
      { upsert: true },
    );

    return {
      data: code,
      statusCode: HttpStatus.OK,
    };
  }

  async login({ email, code, token: pushToken }: LoginDto) {
    const result = await this.sessionModel.updateOne(
      { email, code, isActive: false },
      { pushToken, isActive: true },
    );

    if (result.nModified === 0) {
      throw new HttpException('Code is wrong', HttpStatus.UNAUTHORIZED);
    }

    return {
      statusCode: HttpStatus.OK,
    };
  }

  async logout({ email }: LogoutDto) {
    await this.sessionModel.deleteOne({ email });

    return {
      statusCode: HttpStatus.OK,
    };
  }
}
