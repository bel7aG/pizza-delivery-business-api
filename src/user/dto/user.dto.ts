import { ObjectType, Field, ID } from 'type-graphql';
import { IsIn } from 'class-validator';

@ObjectType()
export class UserDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly address: string;

  @Field()
  readonly userType: string;

  @Field({ nullable: true })
  readonly language: string;

  @Field()
  readonly currency: string;
}
