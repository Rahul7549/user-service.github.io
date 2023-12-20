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


  constructor(private autoLogoutService:AutoLogoutService,
    private serviceOperation:ServiceOperationService,
    private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.autoLogoutService.checkSession();
    this.serviceOperation.fetchServiceList().subscribe(data=>{
      this.serviceList=data;
    })
    if(this.route.snapshot.queryParamMap.get('serviceId')!=undefined||this.route.snapshot.queryParamMap.get('serviceId')!=null)
    {
      let serviceIs=this.route.snapshot.queryParamMap.get('serviceId');
      this.serviceOperation.fetchServiceDetail(serviceIs).subscribe((data)=>{
        this.selectedserviceToActive=data;
        this.openActiveServicePopUp=true;
      })
      
    }
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
    this.serviceList=data;
    
    setTimeout(()=>{
      alert(`you have requested for service ${service.title}`)
    },2500)
      
  },(error)=>{
    setTimeout(()=>{
      alert(`We cant proceed your active request for ${service.title}`)
    },2500)
  })
  this.openActiveServicePopUp=false;
}


sendServiceDeactiveRequest(event:any){
  this.serviceOperation.sendDeactiveRequest(event.id).subscribe((data:any)=>{
    this.serviceList=data;
    
    setTimeout(()=>{
      alert(`you request has been sent`)
    },2500)
      
  },(error)=>{
    setTimeout(()=>{
      alert(`We cant proceed your request now`)
    },2500)
  })
  this.openActiveServicePopUp=false;
}

}
