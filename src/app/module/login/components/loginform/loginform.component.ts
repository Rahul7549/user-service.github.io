import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  generateOtp!:number
  enteredOtp!:number
  emailId:string=''
  getOtpFlag: boolean=false;
  otpErrorFlag: any;
  emailErrorFlag: boolean=false;


  constructor(private router: Router){

  }
  ngOnInit(): void {
  }


  getOtp(){
    
      if(this.emailId.length>=6){
        this.getOtpFlag=true;
      setTimeout(()=>{
        this.generateOtp=Math.floor(100000 + Math.random() * 900000);
        
      },3000)
    }
    else{
      this.emailErrorFlag=true;
    }
  }

  validateOtp(){
    if(this.generateOtp==this.enteredOtp){
      this.otpErrorFlag=false;
    this.router.navigate(['service'])
    }
    else{
      this.otpErrorFlag=true;
    }
  }
}
