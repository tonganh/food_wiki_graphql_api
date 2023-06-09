import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateNestedManyWithoutMateriaInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-create-nested-many-without-materia.input';

@InputType()
export class MaterialCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => NutritionalIngredientsMaterialCreateNestedManyWithoutMateriaInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialCreateNestedManyWithoutMateriaInput;
}
