import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router, } from '@angular/router';
import { ServiceOperationService } from '../../service/service-operation.service';
import { start } from '@popperjs/core';

@Component({
  selector: 'app-explore-service',
  templateUrl: './explore-service.component.html',
  styleUrls: ['./explore-service.component.css']
})
export class ExploreServiceComponent implements OnInit{
  @ViewChild('scrollToPrizeView') scrollToPrizeView!:ElementRef;
  @Input() serviceToExplore:any;
  openSidebarFlag:boolean=false;
  serviceId!: any;
  @Input() selectedService:any;
  openPrizeCardFlag: any;

  constructor(private route: ActivatedRoute,
    private serviceOperation:ServiceOperationService,
    private router:Router){

  }
  ngOnInit(): void {
    this.serviceId=this.route.snapshot.queryParamMap.get('id');
    this.fetchServiceDetails();
  }

  ngOnChanges(changes: SimpleChanges){
     if(changes['selectedService']){
      (this.selectedService);
      
     }
  }

  openSideBarEvent(event:any){
    this.openSidebarFlag=event;
  }

  fetchServiceDetails(){
    this.selectedService=this.serviceOperation.fetchServiceById(this.serviceId);
    
  }

  openPrizeCard(event:any){
    this.scrollToPrizeView.nativeElement.scrollIntoView({
       behavior: 'smooth',
      block: 'start',
      inline: 'nearest'});
      
  }


  activeServicefromServiceExplorePage(){
    this.router.navigate(['home'],{queryParams:{
      serviceId:this.selectedService.id
    }})
  }

}
