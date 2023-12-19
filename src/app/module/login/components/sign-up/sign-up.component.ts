import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUplForm!: FormGroup;

  constructor(private router :Router,
    private route: ActivatedRoute,
    private fb: FormBuilder){

    this.signUplForm = this.fb.group({
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
  

  }
  doNext(){
    // this.enterEmailFlag=false
  }

  doSignUp(){


    if(!this.signUplForm.invalid){
      // call service
    }
    console.log(this.signUplForm.value);
    
    // this.router.navigate(['home'])
  }

  openSignInPage(){
    this.router.navigate(['/sign-in'])
  }


}
