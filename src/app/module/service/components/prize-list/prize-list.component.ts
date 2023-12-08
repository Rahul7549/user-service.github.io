import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css']
})
export class PrizeListComponent implements OnInit{
  selectedPlanOption:string='Team Plans';
  
  ngOnInit(): void {
  }
}
