import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './components/service-list/service-list.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServiceMainComponent } from './components/service-main/service-main.component';
import { ShareModule } from '../share/share.module';
import { ExploreServiceComponent } from './components/explore-service/explore-service.component';
import { ExploreProductComponent } from './components/explore-product/explore-product.component';
import { PrizeListComponent } from './components/prize-list/prize-list.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceMainComponent,
    ExploreServiceComponent,
    ExploreProductComponent,
    PrizeListComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    PrizeListComponent,
    ExploreServiceComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[DatePipe]
})
export class ServiceModule { }
