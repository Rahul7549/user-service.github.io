import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedService:any;
  openPrizeCardFlag: any;

  constructor(private route: ActivatedRoute,
    private serviceOperation:ServiceOperationService){

  }
  ngOnInit(): void {
  console.log('explore');
    this.serviceId=this.route.snapshot.queryParamMap.get('id');
    this.fetchServiceDetails();
  }

  ngOnChanges(changes: SimpleChanges){
    
  }

  openSideBarEvent(event:any){
    this.openSidebarFlag=event;
  }

  fetchServiceDetails(){
    this.selectedService=this.serviceOperation.fetchServiceById(this.serviceId);
    console.log(this.selectedService);
    
  }

  openPrizeCard(event:any){

    // const headerHeight = 60;
    // const scrollOptions: ScrollIntoViewOptions = {
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest'
    // };

    // const targetElement = this.elementRef.nativeElement.querySelector('.scrollable-content');
    
    // if (targetElement) {
      // this.scrollToPrizeView.nativeElement.scrollIntoView(scrollOptions);
      // window.scrollBy(0, -headerHeight); // Adjust the scroll position considering the header
    // }


    // this.openPrizeCardFlag=event;
    console.log("openPrizeCard openPrizeCard openPrizeCard");
    // const container = this.scrollToPrizeView.nativeElement;
    // container.scrollTop = 1100;
    // const headerHeight=60;
    this.scrollToPrizeView.nativeElement.scrollIntoView({
       behavior: 'smooth',
      block: 'start',
      inline: 'nearest'});
      // targetElement.scrollIntoView(scrollOptions);
      // window.scrollBy(0, -headerHeight);
  }

}
