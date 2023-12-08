import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TitleAnimationService } from '../../title-animation.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit{
  timeIntervalForMessage!: number;

  constructor(private titleAnimationService: TitleAnimationService){

  }
  initialTitle:string='Are my customers actually satisfied?|';
  title!:string;
  a:number = 150;
  d:number =150;
  n:number=this.initialTitle.length;

    

  ngOnInit(): void {
    this.timeIntervalForMessage=150*(this.n+2);
    console.log(this.timeIntervalForMessage);
    this.startTitleMoving();
    
  }


  startTitleMoving(){

    setInterval(()=>{
      if(this.initialTitle=='Are my customers actually satisfied?|'){
        this.initialTitle='Do people like attending my events?|';
      }else{
        this.initialTitle='Are my customers actually satisfied?|'
      }
      this.n=this.initialTitle.length;
      this.animateTitle();
    },150*(this.n+2)*2)
    this.animateTitle();
    
  }

  private animateTitle(): void {
    this.titleAnimationService.title$.subscribe(title => {
      this.title = title;
    });

    this.titleAnimationService.addCharAnimateTitle(this.initialTitle);
    setTimeout(()=>{
      this.titleAnimationService.removeCharAnimateTitle(this.initialTitle)
    },this.timeIntervalForMessage)

  }
  
  



}

