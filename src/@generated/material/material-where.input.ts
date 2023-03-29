import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { NutritionalIngredientsMaterialListRelationFilter } from '../nutritional-ingredients-material/nutritional-ingredients-material-list-relation-filter.input';

@InputType()
export class MaterialWhereInput {

    @Field(() => [MaterialWhereInput], {nullable:true})
    AND?: Array<MaterialWhereInput>;

    @Field(() => [MaterialWhereInput], {nullable:true})
    OR?: Array<MaterialWhereInput>;

    @Field(() => [MaterialWhereInput], {nullable:true})
    NOT?: Array<MaterialWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imgUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => NutritionalIngredientsMaterialListRelationFilter, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialListRelationFilter;
}
