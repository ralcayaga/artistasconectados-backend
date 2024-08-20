import { Injectable } from '@nestjs/common';
import { Artista } from 'src/models/artistas';


@Injectable()
export class ArtistasService {
     private artista: Artista[] = [];   
    

    constructor (){
        //No siempre se hace esto, pero es una manera de probar los controllers
        this.artista.push(new Artista('artista1', 
                                      'email1@example.com', 
                                      'password1', 
                                      new Date(), 
                                      'avatar1', ['SIGUE11','SIGUE12','SIGUE13'],[],[]));
        this.artista.push(new Artista('artista2', 
                                      'email2@example.com', 
                                      'password2', 
                                      new Date(), 
                                      'avatar2', ['SIGUE21','SIGUE22','SIGUE23'],[],[]));                          

    }

    obtenerTodosArtista()  {
        const artistasNuevos: Artista[] = [];
        for (let i = 0; i <  this.artista.length; i++) {
            const artistaNuevo: Artista = {
                nombreArtista : this.artista[i].nombreArtista,
                email : this.artista[i].email,
                password :  null,   
                fechaRegistro : this.artista[i].fechaRegistro,  
                avatar : this.artista[i].avatar,      
                seguidores : this.artista[i].seguidores,
                siguiendo : this.artista[i].siguiendo,
                obrasSubidas : this.artista[i].obrasSubidas
            };
            artistasNuevos.push(artistaNuevo);
        }  
        return artistasNuevos;
    }

    obtenerArtista (nombreArtista: string): Artista{
        // return this.artista.find(artista => artista.id == id);
        for (let i = 0; Artista.length > i; i++) {
            if (this.artista[i].nombreArtista == nombreArtista) {
                return this.artista[i];
            }
        }
       
       return null;
    }

  
    crearArtista(artista: Artista): Artista  //Recommendacion : DEvolver siempre el objeto creado
    {
       this.artista.push(artista);
       return artista; //estamos devolviendo el artista que acabamos de crear    
    }

    eliminarArtista(nombreArtista: string){
        for (let i = 0; Artista.length > i; i++) {
            if (this.artista[i].nombreArtista == nombreArtista) {
                this.artista.splice(i, 1);
                return this.artista;
            }
        }
        return null;
    }


    editarAvatar(nombreArtista: string, artistamod: Artista):void{
        const artistaEcontrado = this.obtenerArtista(nombreArtista); 
        if (artistaEcontrado){ 
           // artistaEcontrado.email = artistamod.email;
           // artistaEcontrado.password= artistamod.password; 
           // artistaEcontrado.fechaRegistro = artistamod.fechaRegistro;
            artistaEcontrado.avatar = artistamod.avatar;   
           // artistaEcontrado.seguidores = artistamod.seguidores;
           // artistaEcontrado.siguiendo = artistamod.siguiendo;
           // artistaEcontrado.obrasSubidas=artistamod.obrasSubidas;
        }
    }


    //f. Seguir a un artista (Debe validar que el artista al que se desea seguir exista y que no tenga como seguidor al artista solicitante).
    //seguirArtista(nombreArtista: string, nombreArtistaSigue : Artista):void{
    //    const artistaEncontrado = this.obtenerArtista(nombreArtista);         
    //    if (artistaEncontrado){
    //        const artistaSiguiendo = this.obtenerArtistaSiguiendo(artistaEncontrado.seguidores); 
    //        artistaEncontrado.siguiendo = nombreArtistaSigue.siguiendo;
    //    }   
    //}
    
    seguirArtista(nombreArtista: string, nombreArtistaSigue: string): Artista {
        const artista = this.obtenerArtista(nombreArtista);
        const artistaASeguir = this.obtenerArtista(nombreArtistaSigue);
    
        if (artista && artistaASeguir) {
          if (!artista.seguidores.includes(nombreArtistaSigue)) {
            artista.seguidores.push(nombreArtistaSigue);
            return artista;
          }
        }
    }

}