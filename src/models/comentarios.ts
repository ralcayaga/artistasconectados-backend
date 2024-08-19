import { Artista } from './artistas';

export class Comentario {   
  constructor(
   public id: number,           //identificador único del comentario, generado automáticamente
   public texto: string,        //texto del comentario
   public fecha: Date,          //fecha y hora en la que se escribió el comentario
   public artista: Artista      //artista que escribió el comentario
    
  ) {}
}