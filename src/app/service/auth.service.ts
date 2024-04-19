import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8070/login'; 
  private signupUrl = 'http://localhost:8070/register';  

  constructor(private http: HttpClient,private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      tap(response => {
        if (response && response.userId) {
          localStorage.setItem('userId', response.userId);
        }
      })
    );
  }

  signUp(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.signupUrl, { username, password });
  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
 }

}
