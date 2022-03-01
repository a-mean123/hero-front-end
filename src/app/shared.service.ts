import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:3000/hero/';





  create(hero: any){

   return this.http.post( this.url + 'ajout' , hero  );

  }


  getAllHeros(){

   return this.http.get( this.url + 'all' );

  }

}
