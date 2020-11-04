import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title$ = this.navbarService.title;
  isAdmin = "false";
  loggedIn = "false";

  constructor(private router : Router, private navbarService : NavbarService) { }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('admin');
    this.loggedIn = localStorage.getItem('isLoggedIn');
  }

  logout() {
    localStorage.setItem('admin', 'false');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(["/"]);
  }

}
