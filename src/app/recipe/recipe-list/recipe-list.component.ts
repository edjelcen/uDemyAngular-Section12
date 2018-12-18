import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // selectedRecipe: Recipe;

  recipes: Recipe[];

  constructor(private service: RecipeService) { }

  ngOnInit() {
    this.recipes = this.service.getRecipes();
    console.log(this.recipes);
  }

}
