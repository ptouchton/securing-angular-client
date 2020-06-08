import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  constructor( private authService: AuthService
  ) {
    // this.authService.loginChanged$.subscribe(loggedIn => {
    //   this.isLoggedIn = loggedIn;
    // })
  }

  ngOnInit() {
    this.authService.isLoggedIn().then(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }

  login() {
    this.authService.login();
  }
}
