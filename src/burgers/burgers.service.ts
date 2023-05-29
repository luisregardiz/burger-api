import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Burger, BurgerDocument } from './schema/burgers.schema';
import { Model } from 'mongoose';

@Injectable()
export class BurgersService {
  constructor(
    @InjectModel(Burger.name) private burgersModule: Model<BurgerDocument>,
  ) {}
  async create(createBurgerDto: CreateBurgerDto) {
    const newBurger = await this.burgersModule.create(createBurgerDto);
    return newBurger.save();
  }

  async findAll() {
    return await this.burgersModule.find().exec();
  }

  async findOne(id: string) {
    return await this.burgersModule.findById(id).exec();
  }

  async update(id: string, updateBurgerDto: UpdateBurgerDto) {
    const burgerToModify = await this.burgersModule.findByIdAndUpdate(
      id,
      updateBurgerDto,
      {
        new: true,
      },
    );

    return burgerToModify;
  }

  async remove(id: string) {
    return await this.burgersModule.findByIdAndDelete(id);
  }
}
