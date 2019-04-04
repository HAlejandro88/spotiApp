import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // iportar desde hhtp client
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  // paises: any[] = [];

  nuevasCAnciones: any[] = [];

  constructor(private spotify: SpotifyService){

    this.spotify.getNewRealeses().subscribe((data: any) => this.nuevasCAnciones = data);
    
  }

  // constructor(private http: HttpClient ) { 

  //   console.log('llamadodesde el home');
    
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp: any) =>{
      
  //     this.paises = resp;
  //     console.log(resp);
  //   });
  // }

 

}
