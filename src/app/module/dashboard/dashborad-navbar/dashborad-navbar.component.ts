import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SignInService } from '../../login/sign-in.service';
import { ServiceOperationService } from '../../service/service/service-operation.service';

@Component({
  selector: 'app-dashborad-navbar',
  templateUrl: './dashborad-navbar.component.html',
  styleUrls: ['./dashborad-navbar.component.css']
})
export class DashboradNavbarComponent implements OnInit{
 
  showProfileDroupDownFlag: boolean=false;
  @Output() projectListViewEvent:EventEmitter<any>=new EventEmitter()
  @Input() activeNavbar: string=''
  userDetails:any;
  productList:Array<any>=[];
  showProductListFlag: boolean=true;
  showHelpListFlag: boolean=true;
  showUserProfileOptionFlag: boolean=true;
  openSideMenueFlag: boolean=false;

  showSuccessAlertFlag:boolean=false;
  showErrorAlertFlag:boolean=false;
  alertMessage:string=''

  constructor(private signInService:SignInService,
    private serviceOperation:ServiceOperationService){

  }

  ngOnInit(): void {
    if(sessionStorage.getItem('userSession')==undefined){
      this.showErrorAlertFlag=true;
      this.alertMessage='Your session has been expried! Please Login again'
    }
    else{
      let userDetails=sessionStorage.getItem('userSession')||''
      this.userDetails=  JSON.parse(userDetails);

    }

    // console.log(this.userDetails.user.users[0].email);
    this.productList=this.serviceOperation.fetchProjectList()
    
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


  togleProductList(){
    this.showProductListFlag=!this.showProductListFlag
  }

  togleHelpList(){
    this.showHelpListFlag=!this.showHelpListFlag
  }

  toggleUserDrowpdown(){
    this.showUserProfileOptionFlag=!this.showUserProfileOptionFlag
  }

  toggleSideMenu(){
    this.openSideMenueFlag=!this.openSideMenueFlag
  }

  openHomePage(){
    this.activeNavbar='';
    this.projectListViewEvent.emit(this.activeNavbar)
  }

}




