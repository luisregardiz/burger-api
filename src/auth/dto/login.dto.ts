import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'User cedula for authentication',
    example: '12345678',
  })
  @IsString()
  @IsNotEmpty()
  cedula: string;

  @ApiProperty({
    description: 'Turnstile verification token from client',
    example: '0.AQAAAAAAAAAA...',
  })
  @IsString()
  @IsNotEmpty()
  turnstileToken: string;
}
