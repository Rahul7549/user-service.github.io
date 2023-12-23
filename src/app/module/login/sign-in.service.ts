import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutoLogoutService } from './auto-logout.service';
import { Router } from '@angular/router';
// import {environment} from 'src/environments/environment'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignInService implements OnInit {
  private readonly SESSION_KEY = 'userSession';
  private readonly EXPIRATION_KEY = 'sessionExpiration';
  baseUrl:string=environment.baseUrl;

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
    let requestUrl = `${this.baseUrl}/auth/zoho-token`;
    this.http.post(requestUrl, this.headers).subscribe((sessionDetail: any) => {
        this.sessionDetail=sessionDetail;
    })


  }

  setSessionInSessionStorage(userDetail:any){
    if (this.sessionDetail!=undefined&&this.sessionDetail!=null) {
      this.sessionDetail.user=userDetail;
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
    let requestUrl = `${this.baseUrl}/auth/zoho-user?email=${userEmail}`;
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
    sessionStorage.removeItem(this.SESSION_KEY);
    sessionStorage.removeItem(this.EXPIRATION_KEY);

    this.router.navigate([''])

  }

  userSignUp(payload:any){
    let requestUrl=`${this.baseUrl}/user`
    return this.http.post(requestUrl,payload)
  }

}
