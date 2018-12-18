import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor(private service: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.service.getIngredients();
    this.service.itemIsDeselected.subscribe(() => { this.selectedIngredient = null; });
    this.service.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    );
  }

  onIngredientAdded(addedIngredient: Ingredient) {
    this.service.addIngredient(addedIngredient);
  }

  onItemSelected(index: number) {
    this.selectedIngredient = this.service.selectItem(index);
  }
}
