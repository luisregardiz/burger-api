import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';

@Catch()
export class BadRequestFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response.status(400).json({
      statusCode: 400,
      message: exception.message,
    });
  }
}

@Catch()
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response.status(404).json({
      statusCode: 404,
      message: exception.message,
    });
  }
}

@Catch()
export class ValidationFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    if (exception instanceof BadRequestException) {
      const response = host.switchToHttp().getResponse();
      response.status(exception.getStatus()).json(exception.getResponse());
    }
  }
}
