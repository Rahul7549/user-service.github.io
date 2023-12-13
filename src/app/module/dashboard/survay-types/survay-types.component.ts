import { Component, Input, OnInit } from '@angular/core';
import { ServiceOperationService } from '../../service/service/service-operation.service';

@Component({
  selector: 'app-survay-types',
  templateUrl: './survay-types.component.html',
  styleUrls: ['./survay-types.component.css']
})
export class SurvayTypesComponent implements OnInit{
  @Input() toViewvScreen:string='';

  constructor(private serviceDetails:ServiceOperationService){

  }
  survatType!:Array<any>

  ngOnInit(): void {
    this.survatType=this.serviceDetails.fetchSurvaytype();
    // this.survatType=[...this.survatType];
    }
}
