import {Component, Inject} from '@angular/core';
import {IUserService, IUserServiceToken, UserService} from '../services/user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-forgot-password',
  templateUrl: '../pages/user-forgot-password.component.html',
  providers: [
    {
      provide: IUserServiceToken,
      useClass: UserService
    },
  ],
})
export class UserForgotPasswordComponent {
  public isSuccess = false;
  public Notification = '';

  constructor(@Inject(IUserServiceToken) private iUserService: IUserService) {
  }

  // tslint:disable-next-line:typedef
  public ResetPassword(value: any) {
    // Call service
    const res = this.iUserService.ForgotPassword(value.email);

    // Return
    res.subscribe((response: any) => {
      console.log(response);
      this.Notification = response.Notification;
      this.isSuccess = true;
    }, error => {
      console.log(error);
      this.isSuccess = false;
      this.Notification = error.error.Error;
    });
  }
}
