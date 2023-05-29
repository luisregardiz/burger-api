import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Images, Ingredients } from 'src/interfaces/burgers.interface';

export class CreateBurgerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  images: Images[];

  @IsNotEmpty()
  @IsString()
  desc: string;

  @IsNotEmpty()
  @IsArray()
  ingredients: Ingredients[];

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsBoolean()
  veg: boolean;
}
