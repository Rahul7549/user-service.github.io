import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from '../../login/auto-logout.service';

@Component({
  selector: 'app-dashborad-screen',
  templateUrl: './dashborad-screen.component.html',
  styleUrls: ['./dashborad-screen.component.css']
})
export class DashboradScreenComponent implements OnInit {
  toViewvScreen: string='';


  constructor(private autoLogoutService:AutoLogoutService){

  }

  ngOnInit(): void {
    this.autoLogoutService.checkSession();
  }

  handleProjectListViewEvent(toView:string){
      this.toViewvScreen=toView
  }

  handleCloseSidePopUpEvent(event:any){
    this.toViewvScreen=''
  }

}
