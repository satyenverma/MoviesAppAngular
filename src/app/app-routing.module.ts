import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/add',
    component: AddMovieComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
