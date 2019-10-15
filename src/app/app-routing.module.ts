import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule'},
    {path: 'shoppingList', component: ShoppingListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SignInComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
