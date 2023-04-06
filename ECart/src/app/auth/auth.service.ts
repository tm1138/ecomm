import { Injectable } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';
import { Constants } from '../config/constants';
import { JsonpClientBackend } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private http: ApiHttpService, private constants: Constants) { }

  get _userLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  login(logindata): any {
    // implement login and session
    return this.http.post('/api/users/login', logindata)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.isLoggedIn = true;
        return user;
      }, error => {
        return error;
      }));
  }

  registerUser(registerdata): any {
    // implement register user api call
    return this.http.post('/api/users/createUser', registerdata);
  }

  resetPassword(email_id): boolean {
    // api call
    return true;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    // clear session data
  }
}
