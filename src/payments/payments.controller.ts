import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { PaymentCreateDto } from 'src/payments/payments.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post('/secret')
  async create(
    @Body() paymentCreateDto: PaymentCreateDto,
  ): Promise<{ clientSecret: string; intentId: string }> {
    const { client_secret, id } = await this.paymentsService.getSecret(
      paymentCreateDto,
    );
    return { clientSecret: client_secret, intentId: id };
  }
}
