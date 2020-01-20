import { ObjectType, Field, ID } from 'type-graphql';
import { IsIn } from 'class-validator';
import { CurrencyType } from '../enum/currency-type.enum';

@ObjectType()
export class SignUpDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly username: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly address: string;

  @Field()
  readonly password: string;

  @Field()
  readonly userType: string;

  @Field()
  @IsIn([CurrencyType.EUR, CurrencyType.USD])
  readonly currency: string;
}
