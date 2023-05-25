import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public sidebarVisible: boolean = false;
  public currentUser: User | null
  public userImageUrl: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.currentUser = this.authService.user; 
    this.userImageUrl = this.currentUser?.photoURL || '';
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  signOut() {
    this.authService.SignOut();
  }
}
