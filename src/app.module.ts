import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasController } from './artistas/artistas.controller';
import { ArtistasService } from './artistas/artistas.service';

@Module({
  imports: [],
  controllers: [AppController, ArtistasController],
  providers: [AppService, ArtistasService],
})
export class AppModule {}
