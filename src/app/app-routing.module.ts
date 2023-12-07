import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreServiceComponent } from './module/service/components/explore-service/explore-service.component';
import { LoginformComponent } from './module/login/components/loginform/loginform.component';
import { ServiceListComponent } from './module/service/components/service-list/service-list.component';
import { ServiceMainComponent } from './module/service/components/service-main/service-main.component';
const routes: Routes = [
  {path:'',component:LoginformComponent},
  {path:'service',component:ServiceMainComponent},
  {path:'explore-service',component:ExploreServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
