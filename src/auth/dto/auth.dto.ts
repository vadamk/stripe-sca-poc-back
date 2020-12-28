export class GetCodeDto {
  email: string;
}

export class LoginDto {
  email: string;
  code: string;
  token?: string;
}

export class LogoutDto {
  email: string;
}
