import { Component } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-moving-text',
  templateUrl: './moving-text.component.html',
  styleUrls: ['./moving-text.component.css']
})
export class MovingTextComponent {

  title = 'Moving Title Example';
  moveTitle = trigger('moveTitle', [
    transition('* => *', [
      animate('5s', keyframes([
        style({ transform: 'translateX(100%)' }),
        style({ transform: 'translateX(-100%)' }),
      ])),
    ]),
  ]);

}


