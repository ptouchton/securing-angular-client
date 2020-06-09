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
    this.authService.loginChanged$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
