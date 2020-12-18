import { Module } from '@nestjs/common';
import { StripeModule } from 'nestjs-stripe';

import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [
    StripeModule.forRoot({
      apiKey: process.env.STRIPE_TOKEN,
      apiVersion: null,
    }),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
