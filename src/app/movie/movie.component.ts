import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  stars = 'Not Rated';
  com = '';
  isAdmin = 'false';

  movieForm = new FormGroup({
    review: new FormControl('', [Validators.required])
  });

  constructor( private movieService: MovieService, private router : Router ) { }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('admin');
  }

  starHandler(value){
    this.stars = value;
  }

  postComment(){
    this.movie.comments.push(this.com);
    this.com = '';
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movie.id)
        .subscribe(res => {
          this.router.navigate(['movies']);
        })
  }


}
