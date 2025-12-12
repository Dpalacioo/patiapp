import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { MenuItem } from 'src/app/shared/interfaces/menu-item.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems: MenuItem[] = [];
  userRole: string = '';

  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userRole = this.authService.getRole(); // <-- Este SÍ existe
    this.menuItems = this.menuService.getMenuForUser(); // <-- Este SÍ existe
  }
}
