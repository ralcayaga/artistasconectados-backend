import { Get,Body,Param, Controller, Post,Delete, Put ,Res} from '@nestjs/common';
import { Artista } from 'src/models/artistas';
import { ArtistasService } from './artistas.service';
import { Response } from 'express';

@Controller('artistas')
export class ArtistasController {

constructor(private readonly artistasService: ArtistasService){

}

//a. Registrar un nuevo artista. 
@Post()
    crearArtista(@Body() artista: Artista){
        const artis = this.artistasService.crearArtista(artista);
        return artis;
}

//b. Obtener un artista según su nombreArtista. 
@Get(':nombreArtista')
    obtenerArtista(@Param('nombreArtista') nombreArtista: string, @Res() res: Response){
    const artista = this.artistasService.obtenerArtista(nombreArtista);
    if (artista){
         res.status(200).send(artista);     //Si el artista existe, lo devuelve
    }else{
         res.status(404).send('El artista no existe');  //Sino lo encuentra, devuelve un mensaje de error
    }   
}

//c. Obtener todos los artistas. 
@Get()
    obtenerTodosArtista(){
    return this.artistasService.obtenerTodosArtista(); //Obtener los artistas  
}
//d. Eliminar un artista según su nombreArtista. 
@Delete(':nombreArtista')
    eliminarArtista(@Param('nombreArtista') nombreArtista: string, @Res() res: Response){
    const artista = this.artistasService.eliminarArtista(nombreArtista);
    if (artista){
        res.status(200).send(artista);     //Si el artista existe, lo devuelve la lista sin el artista eliminado
   }else{
        res.status(404).send('El artista no existe');  //Sino lo encuentra, devuelve un mensaje de error
   }  
}
//e. Editar avatar. 
@Put(':nombreArtista')
editarAvatar(@Param('nombreArtista') nombreArtista: string, artistaModificado: Artista, @Body() artista: Artista):void{
    this.artistasService.editarAvatar(nombreArtista,artistaModificado);
   //const art = this.artistasService.editarArtista(nombreArtista);
   // if (art){
   //     res.status(200).send(artista);     //Si el artista existe, lo devuelve la lista sin el artista eliminado
   //}else{
   //     res.status(404).send('El artista no existe');  //Sino lo encuentra, devuelve un mensaje de error
   //}  
        
}


//f. Seguir a un artista.
@Put(':nombreArtista/seguidores/:nombreArtistaSigue')
    seguirArtista(@Param('nombreArtista') nombreArtista: string, 
                  @Param('nombreArtistaSigue') nombreArtistaSigue: string, 
                  @Res() responde: Response){
    const resultado =this.artistasService.seguirArtista(nombreArtista, nombreArtistaSigue);
    if (resultado){
        responde.status(200).send(resultado);     //Si el artista existe, lo devuelve la lista sin el artista eliminado
    }else{
        responde.status(404).send('El artista o la persona a seguir no existen');  //Sino lo encuentra, devuelve un mensaje de error
    }
    }   
}
