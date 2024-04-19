import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: any[] = [];

  constructor(private authService: AuthService) {} 

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },

      {
        label: 'Documents',
        icon: 'pi pi-file',
        routerLink: '/services'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => { this.logout(); }
      }
    ];
  }
  logout() {
    this.authService.logout(); 
  }

}
