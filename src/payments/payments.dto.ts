import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class PaymentCreateDto {
  // ... Other parameters

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  cardType: string;
}
