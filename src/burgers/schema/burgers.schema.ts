import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Images, Ingredients } from 'src/interfaces/burgers.interface';

export type BurgerDocument = HydratedDocument<Burger>;

@Schema()
export class Burger {
  @Prop()
  name: string;

  @Prop()
  images: Images[];

  @Prop()
  desc: string;

  @Prop()
  ingredients: Ingredients[];

  @Prop()
  price: number;

  @Prop()
  veg: boolean;
}

export const BurgerSchema = SchemaFactory.createForClass(Burger);
