import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout-redirect-callback',
  template: '<div></div>'
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.completeLogout().then(user => {
      this.router.navigate(['/'], { replaceUrl: true});
    });
  }

}
