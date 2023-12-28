import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router, } from '@angular/router';
import { ServiceOperationService } from '../../service/service-operation.service';
import { start } from '@popperjs/core';
import { DatePipe } from '@angular/common';

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
  alertMessage: string='';
  showSuccessAlertFlag: boolean=false;
  showErrorAlertFlag: boolean=false;

  constructor(private route: ActivatedRoute,
    private serviceOperation:ServiceOperationService,
    private datePipe: DatePipe,
    private router:Router){

  }
  ngOnInit(): void {
    this.serviceId=this.route.snapshot.queryParamMap.get('id');
    // this.fetchServiceDetails();
  }

  ngOnChanges(changes: SimpleChanges){
    
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


  activeServicefromServiceExplorePage(selectedService:any){
    
    this.serviceOperation.approveRequestedService(selectedService.UserId,selectedService.availableServiceId).subscribe((data:any)=>{
      this.alertMessage=`you request has been sent`
      this.showSuccessAlertFlag=true;
      this.showErrorAlertFlag=false;
    },
    (error)=>{
      setTimeout(()=>{
        this.alertMessage=`We cant proceed your request now`;
        this.showErrorAlertFlag=true;
        this.showSuccessAlertFlag=false;
      },2500)
    })
   
  }

}
