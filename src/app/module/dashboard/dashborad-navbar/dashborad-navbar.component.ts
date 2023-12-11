import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad-navbar',
  templateUrl: './dashborad-navbar.component.html',
  styleUrls: ['./dashborad-navbar.component.css']
})
export class DashboradNavbarComponent implements OnInit{
 
  showProfileDroupDownFlag: boolean=false;

  ngOnInit(): void {
  }
  openProfileDroupDown(){
    this.showProfileDroupDownFlag=this.showProfileDroupDownFlag;
  }

}


