import {Component, OnInit, EventEmitter, Output, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user',
  templateUrl: './user.service.html',
})
@Injectable()
export class UserServiceComponent implements OnInit{
  private apiUrl = 'http://localhost:8080/user/login-api';
  constructor(private http: HttpClient) {
  }
  public loginBody = {username: '', password: ''};
  public headers = { 'Access-Control-Allow-Origin': '*'};

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onLogin = new EventEmitter<string>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onLoginErr = new EventEmitter<any>();

  // tslint:disable-next-line:typedef
  ngOnInit(){}

  // tslint:disable-next-line:typedef
  Login(value: any){
    this.loginBody.username = value.username as string;
    this.loginBody.password = value.password as string;

    this.callAPI(this.apiUrl, this.loginBody, this.headers).subscribe((response: any) => {
      console.log(response);
      console.log(response.Token);
      this.onLogin.emit(response.Token);
    }, error => {
      this.onLoginErr.emit(error);
    });
  }

  // tslint:disable-next-line:typedef
  callAPI(url: string, body: any, header: any): Observable<Observable<any>> {
    // @ts-ignore
    return this.http.post(url, body, header);
  }
}
