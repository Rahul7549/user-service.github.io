import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceOperationService } from '../../service/service/service-operation.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() toViewvScreen:string='';
  @Output() closeSidePopUpEvent:EventEmitter<any>=new EventEmitter();
  projectList:Array<any>=[]
  helpList:Array<any>=[];
  constructor(private serviceDetails:ServiceOperationService){

  }

  ngOnInit(): void {
    this.projectList=this.serviceDetails.fetchProjectList();
    this.helpList=this.serviceDetails.fetchHelpList();
  }

  closeSidePoup(){
    this.toViewvScreen='';
    this.closeSidePopUpEvent.emit();
  }



}
