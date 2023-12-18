import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleAnimationService {

  constructor() { }
  private titleSubject = new BehaviorSubject<string>('');
  title$: Observable<string> = this.titleSubject.asObservable();

  addCharAnimateTitle(title: string): void {
    const characters = title.split('');
    characters.forEach((char, index) => {
      setTimeout(() => {
        this.titleSubject.next(title.substring(0, index + 1));
      }, 150 * index);
    });
  }

  removeCharAnimateTitle(title: string): void {
    const characters = title.split('');
    characters.forEach((char, index) => {
      setTimeout(() => {
        this.titleSubject.next(title.substring(0, characters.length-1));
        characters.pop()
      }, 150 * index);
    });
  }


  subscribeTitleText(){
    this.titleSubject.unsubscribe();
  }

 
}
