import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router :Router){

  }
  
  enterEmailFlag:boolean=true;
  emailId!:string;

  ngOnInit(): void {
  }
  doNext(){
    this.enterEmailFlag=false
  }

  doSignUp(){
    this.router.navigate(['home'])
  }

  openSignUpPage(){
    this.router.navigate(['/sign-up'])
  }


}
