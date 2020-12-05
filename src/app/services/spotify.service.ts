import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAUoXAlH7G9FrfQIM6NRQoc09glJms9mf-bhKPwSUeBeyfohzkhfvCOAqfYDkeB4LvGRmAf2efsbhvOpFo'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }

}
