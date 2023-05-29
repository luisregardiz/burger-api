import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import {
  NotFoundFilter,
  ValidationFilter,
} from 'src/utils/all-exception-filters';

@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Post()
  @UseFilters(ValidationFilter)
  async create(@Body() createBurgerDto: CreateBurgerDto) {
    const newBurger = await this.burgersService.create(createBurgerDto);
    return newBurger;
  }

  @Get()
  @UseFilters(NotFoundFilter)
  async findAll() {
    return await this.burgersService.findAll();
  }

  @Get(':id')
  @UseFilters(NotFoundFilter)
  async findOne(@Param('id') id: string) {
    return await this.burgersService.findOne(id);
  }

  @Patch(':id')
  @UseFilters(NotFoundFilter)
  update(@Param('id') id: string, @Body() updateBurgerDto: UpdateBurgerDto) {
    return this.burgersService.update(id, updateBurgerDto);
  }

  @Delete(':id')
  @UseFilters(NotFoundFilter)
  remove(@Param('id') id: string) {
    return this.burgersService.remove(id);
  }
}
