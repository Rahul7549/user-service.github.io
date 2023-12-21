import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './module/login/login.module';
import { ServiceModule } from './module/service/service.module';
import { ShareModule } from './module/share/share.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './module/share/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {HashLocationStrategy,LocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    LoginModule,
    FormsModule,
    ShareModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DashboardModule,
    HttpClientModule,
    ReactiveFormsModule,

    
    
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
