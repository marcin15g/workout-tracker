import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public sidebarVisible: boolean = false;
  public currentUser: User | null
  public userImageUrl: string;

  constructor (
    public authService: AuthService
  ) {
    this.currentUser = this.authService.user; 
    this.userImageUrl = this.currentUser?.photoURL || '';
  }

  signOut() {
    this.authService.SignOut();
  }

}
