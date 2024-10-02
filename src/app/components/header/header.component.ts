import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleMenu() {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    nav?.classList.toggle('nav-open');
    burger?.classList.toggle('burger-active');
  }
}
