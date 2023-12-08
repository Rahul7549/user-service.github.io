import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './components/loginform/loginform.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    LoginformComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LoginModule { }
