import { PartialType } from '@nestjs/mapped-types';
import { CreateBurgerDto } from './create-burger.dto';

export class UpdateBurgerDto extends PartialType(CreateBurgerDto) {}
