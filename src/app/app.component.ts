import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private router:Router){

  }
  title = 'user-service';
  openSidebarFlag:boolean=false;
  appliedFilterBy!: string;

  openSideBarEvent(event:any){
    this.openSidebarFlag=event;
  }

  applyServiceFilter(filterBy:string){
    this.appliedFilterBy=filterBy;
    this.router.navigate(['service'],{ queryParams: { filterBy: filterBy} })
  }
}
