import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css']
})
export class PrizeListComponent implements OnInit{
  selectedPlanOption:string='Team Plans';
  @Input() toViewvScreen:any
  
  ngOnInit(): void {
    ('priceing list components called');
    
  }

}
