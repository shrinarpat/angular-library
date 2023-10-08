import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, loginResponseModel } from 'src/app/models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<loginResponseModel> {
    return this.http.post<loginResponseModel>(
      `${environment.apiUrl}users/login`,
      {
        email,
        password,
      }
    );
  }

}
