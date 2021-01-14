import {Component, ViewChild} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-component',
  templateUrl: './user.component.html',
})
export class UserComponent{
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
