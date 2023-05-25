import { inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import { Auth, User, user, authState, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { pipe, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService implements OnDestroy {

  public currentUser: User | null = null;
  public auth: Auth = inject(Auth);
  public authState$ = authState(this.auth);
  public authStateSubscription: Subscription;

  constructor(
    public afs: Firestore, 
    public router: Router,
    public ngZone: NgZone 
  ) {
    this.authStateSubscription = this.authState$.subscribe((user) => {
      console.log("INITIAL USER CHECK ::: ", user);
      if (user) {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
 
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  get user(): User | null {
    return this.currentUser || JSON.parse(localStorage.getItem('user')!);
  }
  
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider).then(
      (_) => {
        console.log("GOOGLE AUTH");
        setTimeout(() => this.router.navigate(['home']), 100);
    });
  }

  AuthLogin(provider: any) {
    return signInWithPopup(this.auth, provider)
      .then((result) => {
        this.router.navigate(['home']);
        console.log("USER ::: ", result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }
}