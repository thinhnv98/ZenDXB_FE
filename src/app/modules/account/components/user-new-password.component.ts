import {Component, Inject, OnInit} from '@angular/core';
import {IUserService, IUserServiceToken, UserService} from '../services/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-reset-password',
  templateUrl: '../pages/user-new-password.component.html',
  providers: [
    {
      provide: IUserServiceToken,
      useClass: UserService
    },
  ]
})
export class UserNewPasswordComponent implements OnInit{
  public urlToken = '';
  public Notification = '';
  public isSuccess = true;

  constructor(@Inject(IUserServiceToken) private iUserService: IUserService, private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     this.urlToken = params.token;
    });
  }

  // tslint:disable-next-line:typedef
  public NewPassword(value: any){
    const newPassword = value.newpassword;

    // Call service
    const res = this.iUserService.NewPassword(this.urlToken, newPassword);

    // Return
    res.subscribe((response: any) => {
      this.isSuccess = true;
      console.log(response);
    }, error => {
      this.isSuccess = false;
      console.log(error);
    });
  }
}
