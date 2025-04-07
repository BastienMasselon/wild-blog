import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  
  login = {
    email: '',
    password: '',
  }

  email: string = '';
  // password: string = '';

  loginUser(): void {
    console.log('login');
  }
}
