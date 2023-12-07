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
  serviceList: Array<any> = [];
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
    this.serviceList = this.serviceOperationService.fetchServiceList()
    this.filteredServiceList = this.serviceList
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('filter applied');
    if (changes['appliedFilterBy']) {
      this.filterService();
    }

    if (changes['appliedSearch']) {
      this.searchService();
    }

    if (changes['toView']) {
     console.log(this.toView);
     
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
      this.filteredServiceList = this.serviceList.filter((service) => service.status.toUpperCase() == this.appliedFilterBy.toUpperCase());
    } else {
      this.filteredServiceList = this.serviceList
    }
  }

  searchService() {
    console.log(this.appliedSearch);
    if (this.appliedSearch != undefined) {
      this.filteredServiceList = this.serviceList.filter((service) => {
        return service.title.toUpperCase().includes(this.appliedSearch.toUpperCase())
      }
      );
      console.log('filteredServiceList ->', this.filteredServiceList);

    }
  }

  exploreServiceDetail(service: any) {
    this.toView = 'explore-service';
    this.selectedServiceToExplore=service
    // this.router.navigate(['/explore-service'], { queryParams: { id: service.id } })
  }


  clickToView(toView: string) {
    console.log('to view');
    
    this.toView = toView;
  }




}
