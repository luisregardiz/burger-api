import {
  Controller,
  Post,
  Body,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { TurnstileService } from './turnstile.service';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly turnstileService: TurnstileService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Generate JWT token for user authentication' })
  @ApiResponse({ status: 200, description: 'JWT token generated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid Turnstile token' })
  async login(@Body() loginDto: LoginDto, @Req() req: Request) {
    const isValidTurnstile = await this.turnstileService.verifyTurnstileToken(
      loginDto.turnstileToken,
    );

    if (!isValidTurnstile) {
      throw new BadRequestException('Invalid Turnstile verification');
    }

    const token = await this.authService.generateToken(loginDto.cedula);
    return {
      access_token: token,
      cedula: loginDto.cedula,
    };
  }
}
