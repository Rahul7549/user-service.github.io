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
  userEmailOtp!:string
  wrongOtpFlag!: boolean;
  userNotExist: boolean=false;
  showOtp: boolean=false;
  wrongPasswordFlag: boolean=false;

  constructor(private router :Router,
    private signInService:SignInService,
    ){

  }
  
  

  ngOnInit(): void {
    this.signInService.getSessionToken();
  }

  

   doNext(){ 
    this.signInService.checkZohoUser(this.emailId).subscribe((userDetail:any)=>{
      
      if(userDetail.user==undefined){
        this.userNotExist=true;
        
      }
      else{
        this.userDetails=userDetail.user;
          this.userNotExist=false;
          this.showOtp=true;
          this.emptyEmailFlag=false;
          this.enterEmailFlag=false
          
           if(this.userDetails.zohouser){
              this.enterEmailFlag=false

            setTimeout(()=>{
              this.generateOtp=Math.floor(100000 + Math.random() * 900000);
            },3000)
          }
        
      }

    })
  }

  signIn(){
    if(!this.userDetails.zohouser){
    this.signInService.userSignIn(this.emailId,this.userEmailOtp).subscribe((data:any)=>{
      this.userDetails=data.user;
      this.signInService.setSessionInSessionStorage(this.userDetails);
      this.router.navigate(['home']);
      

    },(error:any)=>{
      
      if(error.error.errors=='please try to login with correct credential'){
        this.wrongPasswordFlag=true;
      }
    })
  }else{
    if(this.userEmailOtp!=undefined&&this.generateOtp!=undefined&&(this.userEmailOtp.toString()==this.generateOtp.toString())){
    this.router.navigate(['home'])
    this.signInService.setSessionInSessionStorage(this.userDetails);
    }
    else{
      this.wrongOtpFlag=true
    }
  }
}


currectOTPPWD(){
  this.wrongPasswordFlag=false;
  this.wrongPasswordFlag=false;
}
  openSignUpPage(){
    this.router.navigate(['/sign-up'],{queryParams:{email:this.emailId}})
  }



}
