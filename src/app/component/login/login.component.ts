// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string  = "";
  password: string  = "";
  isLoginMode = true;

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/document-list']);
      },
      error => {
       
      }
    );
  }

  signUp() {
    this.authService.signUp(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/login']);
        this.isLoginMode = true;
      },
      error => {
      }
    );
  }

  switchMode() { 
    this.isLoginMode = !this.isLoginMode;
  }
}