import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any){
  const API_KEY ='024caa023e684a4ab7ec47082a77a1b9';
    const URL= 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=024caa023e684a4ab7ec47082a77a1b9' 
    return this.http.get(URL);
  }

}
