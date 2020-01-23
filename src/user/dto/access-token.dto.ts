import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class AccessTokenDto {
  @Field()
  readonly type: string;

  @Field()
  readonly token: string;

  @Field()
  readonly exp: number;
}
