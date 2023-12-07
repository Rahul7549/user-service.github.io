import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MovingTextComponent } from './components/moving-text/moving-text.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeScreenComponent,
    MovingTextComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    HomeScreenComponent
  ]
})
export class ShareModule { }
