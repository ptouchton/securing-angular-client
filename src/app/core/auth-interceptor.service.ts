import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CoreModule } from './core.module';
import { AuthService } from './auth-service.component';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '';
    return from(this.authService.getAccessToken().then(token => {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const authReq = req.clone({ headers: header });
      return next.handle(authReq).toPromise();
    }));

  }
}
