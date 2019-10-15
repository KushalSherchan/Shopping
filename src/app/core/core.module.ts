import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { shoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/dataStorage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [shoppingListService,
              RecipeService,
              DataStorageService,
              AuthService]
})
export class CoreModule {}
