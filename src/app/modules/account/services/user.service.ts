import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserLogin} from '../../../models/models';

export const IUserServiceToken = new InjectionToken('IUserService');

export interface IUserService {
  Login(userLogin: UserLogin): Observable<any>;
  ForgotPassword(email: string): Observable<any>;
  NewPassword(token: string, newPassword: string): Observable<any>;
}

@Injectable()
export class UserService implements IUserService{
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public Login(userLogin: UserLogin): Observable<any>{
    const reqBody = {username: '', password: ''};
    reqBody.username = userLogin.username;
    reqBody.password = userLogin.password;
    const headerDictionaries = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: headerDictionaries
    };

    // @ts-ignore
    return this.http.post('http://localhost:8080/user/login-api', reqBody, options);
  }

  // tslint:disable-next-line:typedef
  public ForgotPassword(email: string): Observable<any>{
    const reqBody = {email: ''};
    reqBody.email = email;
    const headerDictionaries = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    const options = {
      headers: headerDictionaries
    };
    // @ts-ignore
    return this.http.post('http://localhost:8080/user/reset-password-by-email', reqBody, options);
  }

  // tslint:disable-next-line:typedef
  public NewPassword(token: string, newPassword: string): Observable<any>{
    const reqBody = {new_password: ''};
    reqBody.new_password = newPassword;
    const headerDictionaries = new HttpHeaders({
      Token: token
    });
    const options = {
      headers: headerDictionaries
    };
    // @ts-ignore
    return this.http.post('http://localhost:8080/user/new-password', reqBody, options);
  }
}
