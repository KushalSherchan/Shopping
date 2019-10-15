import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    recipe: Recipe[];
    constructor(private recipeService: RecipeService,
                private http: HttpClient,
                private authService: AuthService) {}

    saveToServer() {
      return this.http.put('https://recipe-book-6b785.firebaseio.com/recipe.json', this.recipeService.getRecipe());
    }

    getDataServer() {
       const token = this.authService.getToken();

       return this.http.get<Recipe[]>('https://recipe-book-6b785.firebaseio.com/recipe.json?auth' + token).
       subscribe(
         (data) => {
           this.recipeService.serverRecipe(data);
         }
       );
    }


}
