import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>(this.URL);
  }

  movie(id: number) {
    return this.http.get<Movie>(`${this.URL}/${id}`);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.URL, movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }


}