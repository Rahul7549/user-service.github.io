import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutoLogoutService } from './auto-logout.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInService implements OnInit {
  private readonly SESSION_KEY = 'userSession';
  private readonly EXPIRATION_KEY = 'sessionExpiration';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  sessionDetail: any;
  userDetail: any;

  constructor(private http: HttpClient,
    private router: Router
    ) {

  }

  ngOnInit(): void {

  }


  getSessionToken() {
    let requestUrl = 'http://localhost:5000/auth/zoho-token';
    this.http.post(requestUrl, this.headers).subscribe((sessionDetail: any) => {
        this.sessionDetail=sessionDetail;
    })


  }

  setSessionInSessionStorage(){
    if (this.sessionDetail!=undefined&&this.sessionDetail!=null) {
      const expirationTime = new Date();
      const expirationMinutes=this.sessionDetail.expires_in/60;
      expirationTime.setMinutes(expirationTime.getMinutes()+expirationMinutes);
      this.sessionDetail.expirationTime=expirationTime;
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.sessionDetail));
      sessionStorage.setItem(this.EXPIRATION_KEY, expirationTime.toISOString());

    }
    return
  }


   fetchuserDetail(userEmail: any):any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let requestUrl = `http://localhost:5000/auth/zoho-user?email=${userEmail}`;
    return this.http.post(requestUrl, this.headers)
  }


  getSessionDetails(){
    const sessionData = sessionStorage.getItem(this.SESSION_KEY);
    const expirationTime = sessionStorage.getItem(this.EXPIRATION_KEY);
    
    if (sessionData && expirationTime) {
      const now = new Date();
      const expirationDate = new Date(expirationTime);
      return JSON.parse(sessionData);
    }
    return null;
  }


  clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.EXPIRATION_KEY);
    this.router.navigate([''])

  }

}
