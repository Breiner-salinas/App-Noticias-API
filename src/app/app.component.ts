import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias_api';

  listaDenoticias: any[] = [];
  loading=false;

  constructor(private _api: NoticiasService){

  }
  buscarNoticias(parametro: any){
    /* console.log(parametro) */
    this.loading=true;
    this.listaDenoticias=[];

    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe(result=>
        {
          console.log(result)
          this.loading=false;
          this.listaDenoticias=(<any>result).articles;
        });
    }, 1000);
  }
}