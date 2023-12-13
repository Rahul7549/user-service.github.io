import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradScreenComponent } from './dashborad-screen/dashborad-screen.component';
import { DashboradNavbarComponent } from './dashborad-navbar/dashborad-navbar.component';
import { SurvayTypesComponent } from './survay-types/survay-types.component';
import { ProjectListComponent } from './project-list/project-list.component';



@NgModule({
  declarations: [
    DashboradScreenComponent,
    DashboradNavbarComponent,
    SurvayTypesComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboradNavbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
