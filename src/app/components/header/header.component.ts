import {Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly authService = inject(AuthService);

  toggleMenu() {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    nav?.classList.toggle('nav-open');
    burger?.classList.toggle('burger-active');
  }

  logout(): void {
    this.authService.logout();
  }
}
