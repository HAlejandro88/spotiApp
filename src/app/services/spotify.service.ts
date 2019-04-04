import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('service listo spotify');
    
  }

  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAfIqaIP8e8QD134FpYGdQLfNpm0LhicKwvn4m08ki_czl-bAIi29uVplImxcoqXtcC0Vzl4vyLXJbK0wk'
    });

    return this.http.get(url,{headers});
  }

  getNewRealeses(){

    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDP1ANjK5WX_5zul1qvLWCDHNUlYQA75V05FHoQ_WC2B3TyxW4t-tf_ykIMsUW_xN0l3bLDRRKwcPydM6g'
    // });  
  }

  getArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }
}
