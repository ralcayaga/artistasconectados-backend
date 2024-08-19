import { Artista } from "./artistas";
import { Comentario } from "./comentarios";


export class Obras {   
  constructor(
     public id:number,                 //identificador único de la obra, generado automáticamente
     public ruta: string,              //ruta al archivo de imagen o video de la obra
     public descripcion: string,       //descripción de la obra
     public etiquetas:string[],        // lista de etiquetas asociadas a la obra
     public fechaSubida: Date,         //fecha en la que se subió la obra
     public artista: Artista,          //artista que subió la obra
     public meGusta: Artista[],        //lista de artistas que le han dado "me gusta" a la obra
     public comentarios: Comentario[] //lista de comentarios asociados a la obra

    
  ) {}
}