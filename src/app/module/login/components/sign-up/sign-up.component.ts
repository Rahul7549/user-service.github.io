import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInService } from '../../sign-in.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup;
  generateOtp!:number

  constructor(private router :Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private signInService:SignInService){

    this.signUpForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      name:['',[Validators.required]],
      phone:['',[Validators.minLength(10), Validators.required]],
      city:['',[Validators.required]],
      password:['',[Validators.minLength(8), Validators.required]],
      conformPassword:['',[Validators.minLength(8),Validators.required]],
      secondTermCondition:[false,[Validators.required]],
      firstTermCondition:[false,[Validators.required]]
    });
  
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // this.emailId = params['email'] ||'';
    });
    this.signInService.getSessionToken();

  }
  doNext(){
    // this.enterEmailFlag=false
  }

  doSignUp(){


    if(!this.signUpForm.invalid){
      let userSignUpDetails={
        name:this.signUpForm.get('name')?.value,
        city:this.signUpForm.get('city')?.value,
        email:this.signUpForm.get('emailId')?.value,
        phone:this.signUpForm.get('phone')?.value,
        zohoUser:false

      }
      this.signInService.userSignUp(userSignUpDetails).subscribe(data=>{
        let users=[]
        users.push(data)
        let userDetail={
          info:'',
          users:users
        }
        this.signInService.setSessionInSessionStorage(userDetail);
        this.router.navigate(['home'])
      })
        
    }
    // console.log(this.signUplForm.get('name')?.value);
    
    console.log(this.signUpForm.value);
    
    // this.router.navigate(['home'])
  }

  openSignInPage(){
    this.router.navigate(['/sign-in'])
  }


}
