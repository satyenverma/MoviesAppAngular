import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavbarService } from '../navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number;
  movieSub$: Subscription;
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie;
      this.navbarService.title.next("Home");
    });
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

}
