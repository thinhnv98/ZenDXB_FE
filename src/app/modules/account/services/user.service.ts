import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLogin} from '../../../models/models';

export const IUserServiceToken = new InjectionToken('IUserService');

export interface IUserService {
  Login(userLogin: UserLogin): Observable<any>;
  ForgotPassword(email: string): Observable<any>;
}

@Injectable()
export class UserService implements IUserService{
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public Login(userLogin: UserLogin): Observable<any>{
    const reqBody = {username: '', password: ''};
    const header = {'Access-Control-Allow-Origin': '*'};
    reqBody.username = userLogin.username;
    reqBody.password = userLogin.password;

    // @ts-ignore
    return this.http.post('http://localhost:8080/user/login-api', reqBody, header);
  }

  // tslint:disable-next-line:typedef
  public ForgotPassword(email: string): Observable<any>{
    const reqBody = {email: ''};
    const header = {'Access-Control-Allow-Origin': '*'};
    reqBody.email = email;
    // @ts-ignore
    return this.http.post('http://localhost:8080/user/reset-password-by-email', reqBody, header);
  }
}
