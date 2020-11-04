import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    MovieDetailComponent,
    MovieComponent,
    AddMovieComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
