import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value || '';

        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const isValidLength = value.length >= 12;

        const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

        return passwordValid ? null : { securePassword: true};
    }
}

export function passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;
        return password === confirmPassword ? null : {passwordMismatch: true};
    }
}