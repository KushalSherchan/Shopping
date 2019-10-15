import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { shoppingListService } from './shopping-list.service';

import { Ingredient } from '../shared/ingredient.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingService: shoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings;
      }
    );
  }

  onEditItem(num: number) {
      this.shoppingService.startedEditing.next(num);
  }

  ngOnDestroy() {
    // Preventing from any memory leaks
    this.subscription.unsubscribe();
  }

}
