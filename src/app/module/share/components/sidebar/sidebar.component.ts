import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @Input() openSidebarFlag:boolean=true
  constructor(){
  }
  ngOnInit(): void {
  }

  closeSideBar(){
      this.openSidebarFlag=false;
  }

}
