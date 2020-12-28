export class GetCodeDto {
  email: string;
}

export class LoginDto {
  email: string;
  code: string;
  pushToken?: string;
}

export class LogoutDto {
  email: string;
}
