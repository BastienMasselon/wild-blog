import { CommonModule } from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  user = {
    email: '',
    password: '',
  }

  onSubmit(form: NgForm ) {
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () => this.router.navigate(['/profile']),
        error: () => alert('Email ou mot de passe incorrect'),
      })
    }
  }
}
