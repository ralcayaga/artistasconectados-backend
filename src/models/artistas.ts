import { Obra } from 'src/models/obras';

export class Artista {
  constructor(
    public	nombreArtista: string,  // identificador único del artista
    public	email: string,          //correo electrónico del artista
    public	password: string,       //contraseña del artista
    public	fechaRegistro: Date,    //fecha de creación de la cuenta
    public	avatar: string,         //ruta a la imagen de perfil del artista
    public	seguidores: string[],   //artistas que siguen a este artista
    public	siguiendo: string[],    //artistas que este artista sigue
    public	obrasSubidas: string[]  //obras que este artista ha subido
    

  ) {}
}