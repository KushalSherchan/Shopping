import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree   } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  router: any;

    constructor(private authService: AuthService) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      if (this.authService.isAuthenticated) {
        return true;
      } else {
        return this.router.parseUrl('admin/login');
      }
    }
}
