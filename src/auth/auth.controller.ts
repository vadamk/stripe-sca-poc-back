import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Patch,
  Put,
} from '@nestjs/common';

import { LoginDto, GetCodeDto, LogoutDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Put('getCode')
  @HttpCode(HttpStatus.OK)
  async getCode(@Body() getCodeDto: GetCodeDto) {
    return this.authService.getCode(getCodeDto);
  }

  @Patch('createSession')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Delete('removeSession')
  @HttpCode(HttpStatus.OK)
  async logout(@Body() logoutDto: LogoutDto) {
    return this.authService.logout(logoutDto);
  }
}
