import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [authGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
