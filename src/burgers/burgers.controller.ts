import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { BurgersService } from './burgers.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import {
  NotFoundFilter,
  ValidationFilter,
} from 'src/utils/all-exception-filters';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('burgers')
@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseFilters(ValidationFilter)
  async create(@Body() createBurgerDto: CreateBurgerDto) {
    const newBurger = await this.burgersService.create(createBurgerDto);
    return {
      message: 'Burger created successfully',
      data: newBurger,
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseFilters(NotFoundFilter)
  async findAll() {
    return await this.burgersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseFilters(NotFoundFilter)
  async findOne(@Param('id') id: string) {
    return await this.burgersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseFilters(NotFoundFilter)
  update(@Param('id') id: string, @Body() updateBurgerDto: UpdateBurgerDto) {
    return this.burgersService.update(id, updateBurgerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseFilters(NotFoundFilter)
  remove(@Param('id') id: string) {
    return this.burgersService.remove(id);
  }
}
