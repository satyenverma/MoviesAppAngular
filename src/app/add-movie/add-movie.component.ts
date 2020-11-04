import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {


  movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required])
  });

  constructor(private router : Router, private navbarService: NavbarService, private movieService: MovieService) { }

  ngOnInit() {
    this.navbarService.title.next('Home');
  }

  addMovie() {
    var addedMovie= this.movieForm.value;
    addedMovie["comments"] = [""];
    addedMovie["userRating"] = "0";
    addedMovie["averageRating"] = "0"
    if (this.movieForm.valid) {
      this.movieService.addMovie(addedMovie)
        .subscribe(res => {
          this.movieForm.reset();
          this.router.navigate(['movies']);
        })
    }
  }

}
