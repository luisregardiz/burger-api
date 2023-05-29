import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Message {
    return {
      message: 'Ok',
    };
  }
}
