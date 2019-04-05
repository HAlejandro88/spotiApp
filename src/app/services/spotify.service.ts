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
      'Authorization': 'Bearer BQBn81KwNVS4V-GoMW8tocyExkKVREmHywG4uSxRi_assbq-9tqw330D3rcn6cpzdkWDNbOlqU4UyWEYdKM'
    });

    return this.http.get(url,{headers});
  }

  getNewRealeses(){

    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDP1ANjK5WX_5zul1qvLWCDHNUlYQA75V05FHoQ_WC2B3TyxW4t-tf_ykIMsUW_xN0l3bLDRRKwcPydM6g'
    // });  
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }
}
