import { Component, OnInit } from '@angular/core';
import { ServiceOperationService } from '../../service/service/service-operation.service';

@Component({
  selector: 'app-survay-types',
  templateUrl: './survay-types.component.html',
  styleUrls: ['./survay-types.component.css']
})
export class SurvayTypesComponent implements OnInit{
 

  constructor(private serviceDetails:ServiceOperationService){

  }
  productList!:Array<any>

  ngOnInit(): void {
    this.productList=this.serviceDetails.fetchProductList();
    this.productList=[...this.productList, ...this.productList];
    }
}
