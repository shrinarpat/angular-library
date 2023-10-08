import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { ResolveFn } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'https://dummyjson.com/users';

  private options: {
    observe: 'response';
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    // return this.http.get<We can define the format of response object here>(this.url, this.options);
    return this.http
      .get<any>(this.url, this.options)
      .pipe(catchError(this.handleError));
  }

  getUserData(userId: string): Observable<any> {
    return this.http
      .get<any>(this.url + '/' + userId, this.options)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
        );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // client-side or network error occurred, Handle it accordingly
      console.log('An error occurred 💥 ', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }

    return throwError(
      () => new Error('Something went wrong, please try again later')
    );
  }
}
