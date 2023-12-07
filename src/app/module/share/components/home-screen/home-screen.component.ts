import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent{
  title ='Are my employees happy at work?|';
  // moveTitle:any;
  // ngOnInit(): void {
    // this.moveTitle = trigger('moveTitle', [
    //   transition('* => *', [
    //     animate('5s', keyframes([
    //       style({ transform: 'translateX(100%)' }),
    //       style({ transform: 'translateX(-100%)' }),
    //     ])),
    //   ]),
    // ]);
  // }


}

export const moveTitle = trigger('moveTitle', [
  transition('* => *', [
    animate('5s', keyframes([
      style({ transform: 'translateX(100%)' }),
      style({ transform: 'translateX(-100%)' }),
    ])),
  ]),
]);
