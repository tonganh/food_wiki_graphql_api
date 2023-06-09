import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionalIngredientsMaterialOrderByRelationAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-order-by-relation-aggregate.input';

@InputType()
export class QualitativeUnitOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    symbol?: keyof typeof SortOrder;

    @Field(() => NutritionalIngredientsMaterialOrderByRelationAggregateInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialOrderByRelationAggregateInput;
}
