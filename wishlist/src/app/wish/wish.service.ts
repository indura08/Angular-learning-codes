import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) {}

  private getStandardOptions(): any {
    return {
      headres: new HttpHeaders({
        'content-type' : 'application/json',
      })
    };
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`there is an issue with the client or network: ${error.error}`)
    }
    else {
      console.error("server side error happend: " , error.error)
    }

    return throwError(() => new Error('cannot retreive wishs from the server. please try again'));
  }

  getWishes(){

    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    }) ;
    
    return this.http.get("assets/wishes.json" , options).pipe(catchError(this.handleError));

  }

  private addWish(wish:WishItem){
    let option  = this.getStandardOptions();

    option.headres = option.headres.set('Authorization' , 'value need for autherization');
    this.http.post('assests/wishes.json', wish, option); //methna wishg kiynne body eka , option kiynne option parameter eka .
  }
  
}

