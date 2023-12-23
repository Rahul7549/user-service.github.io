import { Component, OnInit, SimpleChange } from '@angular/core';
import { AutoLogoutService } from '../../login/auto-logout.service';
import { ServiceOperationService } from '../../service/service/service-operation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashborad-screen',
  templateUrl: './dashborad-screen.component.html',
  styleUrls: ['./dashborad-screen.component.css']
})
export class DashboradScreenComponent implements OnInit {
  toViewvScreen: string='';
  openActiveServicePopUp: boolean=false;
  selectedserviceToActive: any;
  serviceList: any;
  sericeIdToActive!: string ;
  showSuccessAlertFlag:boolean=false;
  showErrorAlertFlag:boolean=false;
  alertMessage:string=''
  requestedServiceList: any;



  constructor(private autoLogoutService:AutoLogoutService,
    private serviceOperation:ServiceOperationService,
    private route:ActivatedRoute){

  }

  ngOnInit(): void {
    if(this.autoLogoutService.checkSession()=='session has been expried'){
      this.showErrorAlertFlag=true;
      this.alertMessage='Your session has been expried! Please Login again'
    }
    this.serviceOperation.fetchServiceList().subscribe(data=>{
      this.serviceList=data;
    })
    this.fetchRequestedService();
    if(this.route.snapshot.queryParamMap.get('serviceId')!=undefined||this.route.snapshot.queryParamMap.get('serviceId')!=null)
    {
      let serviceIs=this.route.snapshot.queryParamMap.get('serviceId');
      this.serviceOperation.fetchServiceDetail(serviceIs).subscribe((data)=>{
        this.selectedserviceToActive=data;
        this.openActiveServicePopUp=true;
      })
      
    }
  }

  fetchRequestedService(){
    this.serviceOperation.fetchRequestedService().subscribe(data=>{
      this.requestedServiceList=data;
    })
  }

  ngOnChanges(changes:SimpleChange ){
    console.log(this.route.snapshot.queryParamMap.get('serviceId'));
    
    if(this.route.snapshot.queryParamMap.get('serviceId')!=undefined||this.route.snapshot.queryParamMap.get('serviceId')!=null)
    {
      let serviceIs=this.route.snapshot.queryParamMap.get('serviceId');
      this.serviceOperation.fetchServiceDetail(serviceIs).subscribe((data)=>{
        this.selectedserviceToActive=data;
        this.openActiveServicePopUp=true;
      })
      
    }

  }

  handleProjectListViewEvent(toView:string){
      this.toViewvScreen=toView
  }

  handleCloseSidePopUpEvent(event:any){
    this.toViewvScreen=''
  }


  closeActiveServicePopUpEvent(event:any){
    this.openActiveServicePopUp=false;
  }

  handleactiveservice(event:any){
    this.selectedserviceToActive=event
    this.openActiveServicePopUp=true;
  }

  sendServiceActiveRequest(service:any){
  this.serviceOperation.sendActiveRequest(service.id).subscribe((data:any)=>{
    // this.serviceList=data;
    this.fetchRequestedService();
    setTimeout(()=>{
       this.alertMessage=`you have requested for service ${service.title}`
       this.showSuccessAlertFlag=true;
       this.showErrorAlertFlag=false;
    },2500)
    
    setTimeout(()=>{
      this.fetchRequestedService();
   },30000)

  },(error)=>{
    setTimeout(()=>{
      this.alertMessage=`We cant proceed your active request for ${service.title}`;
      this.showErrorAlertFlag=true;
      this.showSuccessAlertFlag=false;
    },2500)
  })
  this.openActiveServicePopUp=false;
}




handledeactiveservice(service:any){
  this.serviceOperation.sendDeactiveRequest(service.id).subscribe((data:any)=>{
    this.serviceList=data;
    
    setTimeout(()=>{
      // alert(`you request has been sent`)
      this.alertMessage=`you request has been sent`
       this.showSuccessAlertFlag=true;
       this.showErrorAlertFlag=false;
    },2500)
      
  },(error)=>{
    setTimeout(()=>{
      // alert(`We cant proceed your request now`)
      this.alertMessage=`We cant proceed your request now`;
      this.showErrorAlertFlag=true;
      this.showSuccessAlertFlag=false;
    },2500)
  })

}

}
