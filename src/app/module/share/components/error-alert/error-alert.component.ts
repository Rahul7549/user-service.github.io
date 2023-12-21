import { Component, Input, OnInit,OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit{
  @Input() showErrorAlertFlag:boolean=false;
  @Input() AlertMessage:string='';

  constructor(private router:Router){}
  ngOnInit(): void {
  }
 
  ngOnChanges(changes:SimpleChange){
    if(this.AlertMessage=='Your session has been expried! Please Login again'){
      setTimeout(()=>{
        this.router.navigate(['sign-in'])
      },3000)
    }
    if(this.showErrorAlertFlag){
      setTimeout(()=>{
        this.showErrorAlertFlag=false;
      },3000)
    }
  }

  closeAlertMessage(){
    this.showErrorAlertFlag=false;
  }

 

}

