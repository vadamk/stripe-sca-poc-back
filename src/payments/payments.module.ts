import { Module } from '@nestjs/common';
import { StripeModule } from 'nestjs-stripe';

import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';

const STRIPE_TOKEN =
  'sk_test_51HuebdAGirukYsQDW4kUFyr7XYoVyG3gtc6CJMLGX20lDFaqGyQRUUEtVbQXjMy4st4kIUDr4skc1RtzMDGSP54F000IMAeLWb';

@Module({
  imports: [
    StripeModule.forRoot({
      apiKey: STRIPE_TOKEN,
      apiVersion: null,
    }),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
