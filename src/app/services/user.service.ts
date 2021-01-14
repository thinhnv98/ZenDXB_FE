import {Component, OnInit, EventEmitter, Output, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user',
  templateUrl: './user.service.html',
  styleUrls: ['../app.component.css'],
})
@Injectable()
export class UserServiceComponent implements OnInit{
  constructor(private http: HttpClient) {
  }

  private apiUrl = 'http://localhost:8080/user/login-api';

  public loginBody = {username: '', password: ''};

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

    const headers = {'Access-Control-Allow-Origin': '*'};

    this.callAPI(this.apiUrl, this.loginBody, headers).subscribe((response: any) => {
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
