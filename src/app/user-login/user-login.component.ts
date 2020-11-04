import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar/services/navbar.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private navbarService : NavbarService, private router: Router) { }

  ngOnInit() {
    this.navbarService.title.next('Movies');
    localStorage.setItem("admin", "false");
    localStorage.setItem("isLoggedIn", "false");

  }

  login() {
    
    if (this.loginForm.valid) {
      if (this.loginForm.get('email').value === 'admin') {
        localStorage.setItem("admin", "true");
        localStorage.setItem("isLoggedIn", "true");
      }
      else {
        localStorage.setItem("admin", "false");
        localStorage.setItem("isLoggedIn", "true");
      }
      this.router.navigate(['movies']);
      
    }
  }
}
