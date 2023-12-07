import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css']
})
export class ServiceMainComponent {
  appliedSearch!: string;
  title = 'user-service';
  openSidebarFlag:boolean=false;
  appliedFilterBy!: string;
  openServiceListFlag:boolean=true;
  serviceToExplore:any
  toView:string='';

  constructor(private router:Router){}

  openSideBarEvent(event:any){
    this.openSidebarFlag=event;
  }

  applyServiceFilter(filterBy:any){
    this.appliedFilterBy=filterBy;
  }

  applyServiceSearch(event:string){
    this.appliedSearch=event;
  }

  openRequiredVied(toview:string){ 
    this.toView=toview;
  }

  


}
