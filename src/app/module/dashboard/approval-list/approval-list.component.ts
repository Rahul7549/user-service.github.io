import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.css']
})
export class ApprovalListComponent implements OnInit{
  @Input() allRequestedService:any
  @Output() exploreServiceEvent:EventEmitter<any>=new EventEmitter()

  constructor(private router:Router){}

  ngOnInit(): void {
  }
  
  


  exploreService(service:any){
    this.exploreServiceEvent.emit(service)
  }
}
