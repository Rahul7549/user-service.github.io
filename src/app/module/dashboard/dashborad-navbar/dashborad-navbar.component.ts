import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SignInService } from '../../login/sign-in.service';

@Component({
  selector: 'app-dashborad-navbar',
  templateUrl: './dashborad-navbar.component.html',
  styleUrls: ['./dashborad-navbar.component.css']
})
export class DashboradNavbarComponent implements OnInit{
 
  showProfileDroupDownFlag: boolean=false;
  @Output() projectListViewEvent:EventEmitter<any>=new EventEmitter()
  @Input() activeNavbar: string=''

  constructor(private signInService:SignInService){

  }

  ngOnInit(): void {
  }
  openProfileDroupDown(){
    this.showProfileDroupDownFlag=!this.showProfileDroupDownFlag;
    this.activeNavbar='';
    this.projectListViewEvent.emit(this.activeNavbar)

  }

  openProjectListView(toView:string){
    if(this.activeNavbar==toView){
      this.activeNavbar='';
    }else{
      this.activeNavbar=toView;
    }
    this.projectListViewEvent.emit(this.activeNavbar)
  }

  signOut(){
    this.signInService.clearSession();
  }


}


