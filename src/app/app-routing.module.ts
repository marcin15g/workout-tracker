import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelectWorkoutPageComponent } from './pages/select-workout-page/select-workout-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'select-workout', component: SelectWorkoutPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
