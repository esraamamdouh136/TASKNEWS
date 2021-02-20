import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import {News} from '../model/News'
@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
   URL  = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4';

  constructor(private http: HttpClient) {
   }
  getAPIS():Observable<any> {
    return this.http.get<any>(this.URL)
    .pipe(
     retry(2),
    catchError(this.handleError)
    );
  }
 
  getDataDetails( id : number ,title:string, Description: string , urlToImage:string  , author:string , publishedAt: Date,
    ) {
    let DataOfNews = {
      id : id,
      title: title,
      description: Description,
      urlToImage: urlToImage,
      author: author,
      publishedAt:publishedAt ,
    }
     try {
          localStorage.setItem('key', JSON.stringify(DataOfNews));
        } catch (e) {
          console.error('Error saving to localStorage', e);
        }

  }
  
  handleError(error: HttpErrorResponse){
    return throwError(error);
    }
}
