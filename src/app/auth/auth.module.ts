import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class AuthModule {}
