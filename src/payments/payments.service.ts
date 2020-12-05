import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

import { PaymentCreateDto } from 'src/payments/payments.dto';

@Injectable()
export class PaymentsService {
  constructor(@InjectStripe() private readonly stripe: Stripe) {}

  async getSecret({
    amount,
    cardType,
  }: PaymentCreateDto): Promise<Stripe.Response<Stripe.PaymentIntent>> {
    const stripeIntent = await this.stripe.paymentIntents.create({
      amount, // The price extracted from the endpoint parameters => 15€
      currency: 'SEK',
      payment_method_types: [cardType], // The type extracted from the
      // endpoint parameters => credit card
    });

    console.log('stripeIntent: ', stripeIntent);

    return stripeIntent;
  }
}
