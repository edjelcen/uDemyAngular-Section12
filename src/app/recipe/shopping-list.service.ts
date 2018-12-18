import { EventEmitter } from '@angular/core';
import { Ingredient } from './recipe.model';

export class ShoppingListService {

   private selectedIngredient: Ingredient;
   private selectedIx = -1;
   private ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('Tomato', 10)
  ];

   ingredientsChanged = new EventEmitter<Ingredient[]>();
   itemIsDeselected = new EventEmitter();

   getIngredients() {
       return this.ingredients.slice();
   }

    addIngredient(ingredient: Ingredient) {
        this.selectedIx = this.ingredients.push(ingredient);
        this.selectedIngredient = ingredient;
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    selectItem(index: number) {
        this.selectedIx = index;
        if (index < 0) {
            this.selectedIngredient = null;
        } else {
            this.selectedIngredient =  this.ingredients[index];
        }
        return this.selectedIngredient;
    }

    private deselectedItem() {
        this.selectedIngredient = null;
        this.selectedIx = -1;
        this.itemIsDeselected.emit();
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    deleteSelectedItem() {
        this.ingredients.splice(this.selectedIx, 1);
        this.deselectedItem();
    }
    clearIngredients() {
        this.ingredients.splice(0);
        this.deselectedItem();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
