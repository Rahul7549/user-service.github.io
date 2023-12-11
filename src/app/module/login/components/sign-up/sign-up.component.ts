import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
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
}
