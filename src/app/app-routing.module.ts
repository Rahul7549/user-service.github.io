import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreServiceComponent } from './module/service/components/explore-service/explore-service.component';
import { LoginformComponent } from './module/login/components/loginform/loginform.component';
import { ServiceListComponent } from './module/service/components/service-list/service-list.component';
import { ServiceMainComponent } from './module/service/components/service-main/service-main.component';
import { SignUpComponent } from './module/login/components/sign-up/sign-up.component';
import { DashboradScreenComponent } from './module/dashboard/dashborad-screen/dashborad-screen.component';
import { SignInComponent } from './module/login/components/sign-in/sign-in.component';
const routes: Routes = [
  {path:'',component:ServiceMainComponent},
  {path:'explore-service',component:ExploreServiceComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path:'home' ,component:DashboradScreenComponent},
  {path:'sign-in',component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
