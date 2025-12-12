import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    // roles permitidos en esa ruta
    const allowedRoles = route.data['roles'] as string[];

    // usuario actual
    const user = this.auth.getUser();

    if (!user || !user.role) {
      return this.router.parseUrl('/auth/login');
    }

    if (!allowedRoles.includes(user.role)) {
      return this.router.parseUrl('/auth/login');
    }

    return true;
  }
}
