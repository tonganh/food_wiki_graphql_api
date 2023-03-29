import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReasonArgs {

    @Field(() => ReasonWhereUniqueInput, {nullable:false})
    @Type(() => ReasonWhereUniqueInput)
    where!: ReasonWhereUniqueInput;
}
