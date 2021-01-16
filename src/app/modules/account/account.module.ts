import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {UserLoginComponent} from './components/user-login.component';
import {AccountComponent} from './account.component';
import {UserForgotPasswordComponent} from './components/user-forgot-password.component';
import {UserNewPasswordComponent} from './components/user-new-password.component';

const routes: Routes = [
  {
    path: 'user/login',
    component: UserLoginComponent,
  },
  {
    path: 'user/forgot-password',
    component: UserForgotPasswordComponent
  },
  {
    path: 'user/reset-password',
    component: UserNewPasswordComponent
  }
];

@NgModule({
  declarations: [
    UserLoginComponent,
    UserForgotPasswordComponent,
    UserNewPasswordComponent,
  ],
  exports: [UserLoginComponent, UserForgotPasswordComponent, UserNewPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
