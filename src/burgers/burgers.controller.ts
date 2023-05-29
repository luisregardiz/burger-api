import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import { Response } from 'express';

@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Post()
  create(@Body() createBurgerDto: CreateBurgerDto) {
    return this.burgersService.create(createBurgerDto);
  }

  @Get()
  findAll() {
    return this.burgersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const burger = await this.burgersService.findOne(id);
      response.status(HttpStatus.OK).json(burger);
    } catch (error) {
      response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: `Burger with id #${id} not found`,
      });
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBurgerDto: UpdateBurgerDto) {
    return this.burgersService.update(id, updateBurgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgersService.remove(id);
  }
}
