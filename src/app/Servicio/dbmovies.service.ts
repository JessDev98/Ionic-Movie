import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbmoviesService {
HttpClient= inject(HttpClient)
  constructor() { }

  getMovieNowPlaying() {
    return this.HttpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4ece8c0f5685578e209a2069ed029c63&language=en-US&page=1')
  }

  getDetalleMovie(id:number) {
    return this.HttpClient.get('https://api.themoviedb.org/3/movie/' +id+ '?api_key=4ece8c0f5685578e209a2069ed029c63')
  }

  getSearchMovie(query:any) {
    return this.HttpClient.get('https://api.themoviedb.org/3/search/movie?api_key=4ece8c0f5685578e209a2069ed029c63&language=es-ES&query=' +query+ '&page=1&include_adult=true')
  }

}



