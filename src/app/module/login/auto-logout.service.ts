import { Injectable } from '@angular/core';
import { SignInService } from './sign-in.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {

  private readonly CHECK_INTERVAL = 60000*30; // Check every minute
  checkSessionIntervalId:any;

  constructor(private signInservice: SignInService,
    ) {
    this.init();
  }

  private init(): void {
    this.checkSessionIntervalId= setInterval(() => {
      this.checkSession();
    }, this.CHECK_INTERVAL);
  }

  checkSession(): void {
    
    const sessionData = this.signInservice.getSessionDetails();
    

    if (!sessionData) {
      alert('session gor expired ! Pleae Login again')
      this.signInservice.clearSession();
      if(this.checkSessionIntervalId){
        clearInterval(this.checkSessionIntervalId);
        return;
      }
    }

    
    const now = new Date();
    const expirationTime = new Date(sessionData.expirationTime);

    if (expirationTime==null||now >= expirationTime) {
      alert('session gor expired ! Pleae Login again')
      this.signInservice.clearSession();
      if(this.checkSessionIntervalId){
        clearInterval(this.checkSessionIntervalId);
      }
      // Optionally, you can navigate to the logout page or show a modal
    }
  }
}
