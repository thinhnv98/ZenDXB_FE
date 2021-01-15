import {Component, Inject} from '@angular/core';
import {UserService, IUserServiceToken, IUserService} from '../services/user.service';

// Class
import {UserLogin} from '../../../models/models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-login',
  templateUrl: '../pages/user-login.component.html',
  providers: [
    {
      provide: IUserServiceToken,
      useClass: UserService
    },
  ]
})
export class UserLoginComponent {
  public isSuccess = true;
  public err = '';

  constructor(@Inject(IUserServiceToken) private iUserService: IUserService) {
  }

  // tslint:disable-next-line:typedef
  public Login(value: any){
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    const userLogin = new UserLogin(value.username, value.password);

    // Call service
    const res = this.iUserService.Login(userLogin);

    // Return
    res.subscribe((response: any) => {
      this.isSuccess = true;
      console.log(response);
    }, error => {
      this.isSuccess = false;
      this.err = error.error.Error;
      console.log(error);
    });
  }
}
