import {Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
        new Recipe('Pizza', 'How to make delicious Pizza', 'https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        [new Ingredient('Wheat', 5), new Ingredient('Chicken', 2)]),
        new Recipe('Momo', 'Nepali made Momo coming.', 'https://i.ytimg.com/vi/7tdUCk9pLPw/maxresdefault.jpg',
        [new Ingredient('Pork', 2), new Ingredient('Cabbage', 1), new Ingredient('Oil', 2)]),
        new Recipe('Biryani', 'A delicious indian cuisine', 'https://recipes.timesofindia.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
        [new Ingredient('Rice', 1), new Ingredient('Chicken', 1), new Ingredient('Masala', 3)])
    ];

    constructor(private SlService: shoppingListService) {}

    getRecipe() {
        return this.recipes.slice();
    }

    singleRecipe(index: number) {
        return this.recipes[index];
    }

    delRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }


    addIngToShoppingList(ingredients: Ingredient[]) {
        this.SlService.addIngFromRecipe(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    serverRecipe(serverRecipe: Recipe[]) {
      this.recipes = serverRecipe;
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe( index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

}
