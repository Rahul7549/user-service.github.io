import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  openSidebarFlag: boolean = false
  @Output() openSideBarEvent: EventEmitter<any> = new EventEmitter()
  @Output() applyServiceFilter: EventEmitter<any> = new EventEmitter()
  @Output() applyServiceSearch: EventEmitter<any> = new EventEmitter()
  @Output() openPrizeCard: EventEmitter<any> = new EventEmitter()
  @Output() openRequiredVied: EventEmitter<any> = new EventEmitter()

  appliedFilter: string = 'Apply Filter';
  appliedSearch: any;
  toggleServiceFlag: boolean = false;
  togglePrizeFlag: boolean = false;
  viewProductViewFlag: boolean = false;
  toview: string='';
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  openSideManu(flag: any) {
    this.openSidebarFlag = flag
    this.openSideBarEvent.emit(this.openSidebarFlag);
  }

  applyFilter(filter: any) {
    this.appliedFilter = filter
    this.applyServiceFilter.emit(filter)
  }

  searchService(event: any) {
    this.appliedSearch = event.target.value;

    this.applyServiceSearch.emit(this.appliedSearch)
  }



  toggleService(toview: string) {
    console.log(this.toggleServiceFlag);
    this.toggleServiceFlag = false;
    this.toggleServiceFlag = !this.toggleServiceFlag;
    this.router.navigate(['service'])
    this.toview = toview;
    this.openRequiredVied.emit(toview)
  }

  toggleprize(toview: string) {
    if(this.toview==toview){
      this.toview='';
    }else{
      this.toview = toview;
    }
    this.openPrizeCard.emit(this.toview);
  }

  openProductView(toview: string) {
    this.toview = toview;
    this.openRequiredVied.emit(toview)
  }

  openSignUpPage(){
    this.router.navigate(['/sign-up'])
  }

  openSignInPage(){
    this.router.navigate(['/sign-in'])
  }

}
