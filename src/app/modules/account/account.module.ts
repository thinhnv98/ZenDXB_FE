import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {UserLoginComponent} from './components/user-login.component';
import {UserServiceComponent} from './services/user.service';
import {AccountComponent} from './account.component';

const routes: Routes = [
  {
    path: 'user/login',
    component: UserLoginComponent,
  },
];

@NgModule({
  declarations: [
    UserLoginComponent,
    UserServiceComponent,
  ],
  exports: [UserLoginComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
