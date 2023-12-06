import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado= 'co'
  categorias: any[]=[
    {value: 'general', nombre:'General'},
    {value: 'business', nombre:'Negocios'},
    {value: 'entertainment', nombre:'Entretenimiento'},
    {value: 'health', nombre:'Salud'},
    {value: 'science', nombre:'Ciencia'},
    {value: 'sports', nombre:'Deportes'},
    {value: 'technology', nombre:'Tecnologia'},

  ]
  paises: any[]=[
    {value: 'co', nombre:'Colombia'},
    {value: 'ar', nombre:'Argentina'},
    {value: 'br', nombre:'Brazil'},
    {value: 'fr', nombre:'Francia'},
    {value: 'mx', nombre:'Mexico'},
    {value: 'gb', nombre:'Reino Unido'},

  ]
  constructor(){

  }

  buscarNoticia(){
    /* console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado); */
    const PARAMETROS ={
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);

  }

}
