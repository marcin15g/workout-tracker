import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthService } from './shared/services/auth.service';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';

import { SelectWorkoutPageComponent } from './pages/select-workout-page/select-workout-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

const primeModules = [
  ButtonModule,
  ToolbarModule,
  SidebarModule,
  AvatarModule
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    HomePageComponent,
    SelectWorkoutPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...primeModules,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
