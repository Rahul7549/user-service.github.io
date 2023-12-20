import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../sign-in.service';
import { AutoLogoutService } from '../../auto-logout.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userDetails: any;
  generateOtp!:number
  enterEmailFlag:boolean=true;
  emailId:string='';
  emptyEmailFlag:boolean=false;
  userEmailOtp!:number
  wrongOtpFlag!: boolean;
  userNotExist: boolean=false;
  showOtp: boolean=false;

  constructor(private router :Router,
    private signInService:SignInService,
    ){

  }
  
  

  ngOnInit(): void {
    this.signInService.getSessionToken();
  }

  

   doNext(){ 
    this.signInService.fetchuserDetail(this.emailId).subscribe((userDetail:any)=>{

      this.userDetails=userDetail;
      
      if(this.userDetails==undefined||this.userDetails==undefined||this.userDetails.users.length==0){
        this.userNotExist=true;
      }
      else{
        console.log(this.userDetails);
        this.showOtp=true;
        this.userNotExist=false;
        this.signInService.setSessionInSessionStorage(this.userDetails);
        this.emptyEmailFlag=false;
        this.enterEmailFlag=false
        setTimeout(()=>{
          this.generateOtp=Math.floor(100000 + Math.random() * 900000);
        },3000)
      }

    })
  }

  doSignUp(){
    if(this.userEmailOtp!=undefined&&this.generateOtp!=undefined&&(this.userEmailOtp==this.generateOtp)){
    this.router.navigate(['home'])
    }
    else{
      this.wrongOtpFlag=true
    }
  }

  openSignUpPage(){
    this.router.navigate(['/sign-up'],{queryParams:{email:this.emailId}})
  }



}
