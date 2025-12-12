import { Component } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MenuItem } from 'src/app/shared/interfaces/menu-item.interface';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  userRole$: Observable<string>;
  menuItems$: Observable<MenuItem[]>;

  constructor(public menuService: MenuService, public auth: AuthService) {
    this.userRole$ = this.auth.user$.pipe(map((user) => user?.role ?? ''));

    this.menuItems$ = this.auth.user$.pipe(
      map((user) => (user ? this.menuService.getMenuByRole(user.role) : []))
    );
  }

  logout() {
    this.auth.logout();
    window.location.href = '/auth/login';
  }
}
