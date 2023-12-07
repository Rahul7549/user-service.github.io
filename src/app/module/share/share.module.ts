import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    NavbarComponent,
    SidebarComponent
  ]
})
export class ShareModule { }
