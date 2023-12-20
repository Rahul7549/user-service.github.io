import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ServiceOperationService } from '../../service/service-operation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { service } from 'src/app/module/share/models/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  openPopUpFlag: boolean = false;
  serviceList: any = [];
  productList: Array<any> = [];
  filteredServiceList: Array<any> = [];
  @Input() appliedFilterBy: any;
  @Input() appliedSearch: any
  @Input() openServiceListFlag = true;
  @Input() toView!: string;
  @Output() exploreNewService: EventEmitter<any> = new EventEmitter();
  selectedServiceToExplore: any;

  constructor(private serviceOperationService: ServiceOperationService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    this.serviceOperationService.fetchServiceList().subscribe(data=>{
      this.serviceList=data;
      this.filteredServiceList = this.serviceList;
    })
    this.filteredServiceList = this.serviceList;

    this.productList=this.serviceOperationService.fetchProductList()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appliedFilterBy']) {
      this.filterService();
    }

    if (changes['appliedSearch']) {
      this.searchService();
    }

    if (changes['toView']) {
     
    }


  }

  openServicePopUp() {
    this.openPopUpFlag = true;
  }
  updatePopUpOpenFlag(event: any) {
    this.openPopUpFlag = event
  }

  filterService() {
    if (this.appliedFilterBy != 'All') {
      this.filteredServiceList = this.serviceList.filter((service:any) => service.status.toUpperCase() == this.appliedFilterBy.toUpperCase());
    } else {
      this.filteredServiceList = this.serviceList
    }
  }

  searchService() {
    if (this.appliedSearch != undefined) {
      this.filteredServiceList = this.serviceList.filter((service:any) => {
        return service.title.toUpperCase().includes(this.appliedSearch.toUpperCase())
      }
      );

    }
  }

  exploreServiceDetail(service: any) {
    this.toView = 'explore-service';
    setTimeout(()=>{
      this.selectedServiceToExplore=service
    },200)
    // this.router.navigate(['/explore-service'], { queryParams: { id: service.id } })
  }


  clickToView(toView: string) {
    this.toView = toView;
  }




}
