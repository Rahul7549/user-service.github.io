import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TitleAnimationService } from '../../title-animation.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  timeIntervalForMessage!: number;
  moveingTextInterval: any;
  @Input() toView: string = ''

  constructor(private titleAnimationService: TitleAnimationService) {

  }
  initialTitle: string = 'Are my customers actually satisfied?|';
  title!: string;
  a: number = 150;
  d: number = 150;
  n: number = this.initialTitle.length;



  ngOnInit(): void {
    this.timeIntervalForMessage = 150 * (this.n + 2);
    this.startTitleMoving();

  }

  ngOnChanges(changes: SimpleChanges): void {
    
       
        
     
  }


  startTitleMoving() {
    this.moveingTextInterval = setInterval(() => {
      
      if (this.initialTitle == 'Are my customers actually satisfied?|') {
        this.initialTitle = 'Do people like attending my events?|';
      } else {
        this.initialTitle = 'Are my customers actually satisfied?|'
      }
      this.n = this.initialTitle.length;
      this.animateTitle();
    }, 150 * (this.n + 2) * 2)
    this.animateTitle();

  }

  private animateTitle(): void {
    this.titleAnimationService.title$.subscribe(title => {
      this.title = title;
    });

    this.titleAnimationService.addCharAnimateTitle(this.initialTitle);
    setTimeout(() => {
      this.titleAnimationService.removeCharAnimateTitle(this.initialTitle)
    }, this.timeIntervalForMessage)

  }


  ngOnDestroy(): void {
    // this.stopInterval();
    if(this.moveingTextInterval){
      clearInterval(this.moveingTextInterval);
    }
  }

}

