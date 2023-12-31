import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceOperationService } from '../../service/service/service-operation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-survay-types',
  templateUrl: './survay-types.component.html',
  styleUrls: ['./survay-types.component.css']
})
export class SurvayTypesComponent implements OnInit{
  @Input() toViewvScreen:string='';
  @Input() serviceList:any
  @Input() requestedServiceList:any;
  survatType:any
  @Output() activeservice:EventEmitter<any>=new EventEmitter()
  @Output() deactiveservice:EventEmitter<any>=new EventEmitter()

  constructor(private serviceDetails:ServiceOperationService,
    private datePipe: DatePipe){

  }
  

  ngOnInit(): void {
    this.survatType=this.serviceDetails.fetchSurvaytype()
    // this.survatType=[...this.survatType];
    }

    

    activeService(service:any){
      this.activeservice.emit(service)
    }

    deactiveService(service:any){
        this.deactiveservice.emit(service);
    }

}
