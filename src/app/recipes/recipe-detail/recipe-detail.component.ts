import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  DetailFromRecipeItem: Recipe ;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //const hifi = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params.id;
          this.DetailFromRecipeItem = this.recipeService.singleRecipe(this.id);
      }
    );
  }

  addShopping() {
    this.recipeService.addIngToShoppingList(this.DetailFromRecipeItem.recipeDesc);
  }

  gotoEditRouter() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    console.log('Button clicked');
  }

  deleteRecipe() {
    this.recipeService.delRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }



}
