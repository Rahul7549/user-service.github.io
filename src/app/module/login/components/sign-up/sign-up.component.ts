import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInService } from '../../sign-in.service';
import { nameValidator,addressValidator,phoneNumberValidator,emailValidator,
  passwordValidator,confirmPasswordValidator,mustBeTrueValidator } from 'src/app/module/share/validator/validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup;
  passwordMisMatchFlag: boolean=false;
  otpValue!:number
  generatedOTP!:number
  signUpFormView:boolean=true;
  wrongOtpFlag: boolean=false;

  constructor(private router :Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private signInService:SignInService){

    this.signUpForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email,emailValidator()]],
      name:['',[Validators.required,nameValidator()]],
      phone:['',[Validators.minLength(10), Validators.required,phoneNumberValidator()]],
      city:['',[Validators.required,addressValidator()]],
      password:['',[Validators.minLength(8), Validators.required,passwordValidator()]],
      conformPassword:['',[Validators.minLength(8),Validators.required,confirmPasswordValidator('password')]],
      secondTermCondition:[,[Validators.required,mustBeTrueValidator()]],
      firstTermCondition:[,[Validators.required,mustBeTrueValidator()]]
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

  submitOTP(){
    if(this.otpValue!=undefined&&this.otpValue==this.generatedOTP){
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
  else{
    this.wrongOtpFlag=true;
  }

  }

  submitSignUPForm(){
    if(!this.signUpForm.invalid){
      console.log('valid',this.signUpForm);
      
      setTimeout(()=>{
        this.generatedOTP=Math.floor(100000 + Math.random() * 900000);
      },3000) 
      this.signUpFormView=false;
    }
    else{
      console.log('invalid',this.signUpForm);
      this.markFormGroupTouched(this.signUpForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  conformPasswordCheck(){
    console.log('method called');
    
    if(this.signUpForm.get('password')?.value!=this.signUpForm.get('conformPassword')?.value){
      this.passwordMisMatchFlag=true;
    }
    else{
      this.passwordMisMatchFlag=false;

    }
  }

  openSignInPage(){
    this.router.navigate(['/sign-in'])
  }


}
