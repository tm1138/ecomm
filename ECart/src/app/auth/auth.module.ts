import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NavbarModule } from './../navbar/navbar.module';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';


const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'logout', component: LogoutComponent
      },
      {
        path: 'signup', component: SignupComponent
      },
      {
        path: 'forgotpassword', component: ResetPasswordComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent, AuthComponent, LogoutComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NavbarModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
