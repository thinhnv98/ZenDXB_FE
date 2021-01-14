import {Component, ViewChild} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-login',
  templateUrl: '../pages/user-login.component.html',
})
export class UserLoginComponent {
  public isSuccess = true;
  public err = '';

  // tslint:disable-next-line:typedef
  parentLogin(token: any){
    this.isSuccess = true;
  }

  // tslint:disable-next-line:typedef
  parentLoginErr(err: any){
    this.isSuccess = false;
    this.err = err.error.Error;
  }
}
