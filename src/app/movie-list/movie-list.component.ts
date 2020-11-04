import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { NavbarService } from '../navbar/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  //movies$ : Observable<Movie[]>;
  movies$ : Subscription;
  movies: Movie[];
  term : string;

  constructor(private movieService : MovieService, private navbarService : NavbarService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });;
    this.navbarService.title.next('Movies');
  }

  sortRating() {
    this.movies.sort((m1, m2) => {
      if(+m1.userRating < +m2.userRating) return 1;
      if(+m1.userRating === +m2.userRating) return 0;
      if(+m1.userRating > +m2.userRating) return -1;
    })
  }

  sortName() {
    this.movies.sort((m1, m2) => {
      if(m1.name > m2.name) return 1;
      if(m1.name === m2.name) return 0;
      if(m1.name < m2.name) return -1;
    })
  }

  ngOnDestroy(): void {
    this.movies$.unsubscribe();
  }

}