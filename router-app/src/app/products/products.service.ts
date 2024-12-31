import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data: any[] = [
    {id:1, name:"guitar" , price:1000},
    {id:2 , name:"piano", price: 5000},
    {id: 3, name: "Drums", price: 1200}
  ]

  constructor() { }

  getAllProducts(){
    return of(this.data);
  }

  getProduct(id: Number){
    return of(this.data.find(p => p.id === id)); //methana uda thanai me of kiyne ek tehruma api me methods walin retunr kenne observables kiykai , ethkot htmai mewa on krna component walt mewa use krnna subsribe krnna puluwan , eka poddk e observable saha subscribe scn tika thiyna note eka reffer krna gmn blnna aye baladdi 
  }

}
