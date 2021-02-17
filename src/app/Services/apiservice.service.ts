import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
   URL  = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4'
  constructor(private http: HttpClient) { }
  getAPIS() {
    return this.http.get(this.URL)
    .pipe(
    catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    return throwError(error);
    }
}
