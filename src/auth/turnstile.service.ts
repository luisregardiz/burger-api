import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TurnstileService {
  private readonly turnstileVerifyUrl =
    'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  async verifyTurnstileToken(token: string): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', token);

    if (!secretKey) {
      throw new BadRequestException('Turnstile secret key not configured');
    }

    try {
      const response = await axios.post(this.turnstileVerifyUrl, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      return response.data.success === true;
    } catch (error) {
      console.error('Turnstile verification error:', error);
      return false;
    }
  }
}
