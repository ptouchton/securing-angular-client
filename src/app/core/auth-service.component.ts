import { Injectable } from '@angular/core';
import { UserManager, User} from 'oidc-client';
import { CoreModule } from './core.module';
import { Constants } from '../constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userManager: UserManager;
  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();
  loginChanged$ = this._loginChangedSubject.asObservable();

  constructor() {

    const stsSettings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}signin-callback`,
      scope: 'openid profile projects-api',
      response_type: 'code',
      post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`
    };

    this._userManager = new UserManager(stsSettings);
   }

   login() {
     return this._userManager.signinRedirect();
   }

   async isLoggedIn(): Promise<boolean> {
     const user = await this._userManager.getUser();
     const userCurrent = !!user && !user.expired;
     if (this._user !== user) {
       this._loginChangedSubject.next(userCurrent);
     }
     this._user = user;
     return userCurrent;
    }
 
}
