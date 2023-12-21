import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit{
  @Input() showSuccesAlertFlag:boolean=false;
  @Input() alertMessage:string=''
  constructor(){}
  ngOnInit(): void {
  }


  ngOnChanges(changes:SimpleChange){
    
    if(this.showSuccesAlertFlag){
      setTimeout(()=>{
        this.showSuccesAlertFlag=false;
      },3000)
    }
  }

  closeAlertMessage(){
    this.showSuccesAlertFlag=false;
  }

}
