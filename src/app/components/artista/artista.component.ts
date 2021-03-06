import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router'; // PAra saber cual es la ruta activa
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id']);

      this.getArtista(params['id']);
    });
   }

   getArtista(id: string){
      this.loading = true;
      this.spotify.getArtista(id).subscribe(artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
   }
}
