import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ServiceOperationService } from '../../service/service/service-operation.service';

@Component({
  selector: 'app-service-request-view',
  templateUrl: './service-request-view.component.html',
  styleUrls: ['./service-request-view.component.css']
})
export class ServiceRequestViewComponent implements OnInit{
 

  selectedPlan:string='';
  firstTermComdition:boolean=false
  secondtTermComdition:boolean=false
  thirdTermComdition:boolean=false

  @Output() closeActiveServicePopUpEvent:EventEmitter<any>=new EventEmitter();
  @Output() sendServiceActiveRequest:EventEmitter<any>=new EventEmitter();
  @Output() sendServiceDeactiveRequest:EventEmitter<any>=new EventEmitter();


  @Input() selectedserviceToActive:any
  notPlanSelected: boolean=true;
  acceptTermAndConditionFlag: boolean=false;

  constructor(private serviceOperation:ServiceOperationService){}

  ngOnInit(): void {
  }

  closeActiveServicePopUp(){
      this.closeActiveServicePopUpEvent.emit()
  }

  selectPlan(planName:any){
    this.selectedPlan=planName;
    this.notPlanSelected=true;
  }

  acceptFirsTermConditin(){
    this.firstTermComdition=!this.firstTermComdition;
   this.checkTermConditionFlag()

  }

  acceptSecondTermConditin(){
   this.secondtTermComdition=!this.secondtTermComdition;
   this.checkTermConditionFlag()

  }

  acceptthirdTermConditin(){
    this.thirdTermComdition=!this.thirdTermComdition;
    this.checkTermConditionFlag()
  }

  checkTermConditionFlag(){
    if(this.thirdTermComdition&&this.secondtTermComdition&&this.thirdTermComdition){
      this.acceptTermAndConditionFlag=false;
    }
    else{
      this.acceptTermAndConditionFlag=true;
    }
  }

  sendActiveRequest(){
    if(this.selectedPlan==''){
      this.notPlanSelected=false;
    }
    this.checkTermConditionFlag()

      if(this.notPlanSelected&&!this.acceptTermAndConditionFlag){
         this.sendServiceActiveRequest.emit(this.selectedserviceToActive)
      }
    
    
    }

    
    sendDeactiveRequest(){
      if(this.selectedPlan==''){
        this.notPlanSelected=false;
      }
      this.checkTermConditionFlag()
  
        if(this.notPlanSelected&&!this.acceptTermAndConditionFlag){
           this.sendServiceDeactiveRequest.emit(this.selectedserviceToActive)
        }
      
      
      }
    



}
