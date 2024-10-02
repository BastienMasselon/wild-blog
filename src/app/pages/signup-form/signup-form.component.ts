import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatchValidator, securePasswordValidator } from '../../../validators/validators';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  formBuilder: FormBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group({
      password: ['', [Validators.required, securePasswordValidator()]],
      confirmPassword: ['']
    }, { validators: passwordMatchValidator() })
  });

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Formulaire envoyé avec succès', this.signUpForm.value)
    } else {
      console.log('Formulaire invalide');
    }
  }
}
