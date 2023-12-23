import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    if (!control.value) {
        return { required: true };
      }

    const valid = /^[a-zA-Z\s]*$/.test(control.value);

    return valid ? null : { invalidName: true };
  };
}



export function addressValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value as string;
  
      if (!value) {
        return { required: true };
      }
      // Check if the address does not start with a number
      const doesNotStartWithNumber = isNaN(parseInt(value.charAt(0), 10));
      return doesNotStartWithNumber ? null : { addressStartsWithNumber: true };
    };
}

export function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value as string;
  
      if (!value) {
        return { required: true };
      }
      // Define a regular expression for a 10-digit phone number that does not start with zero
      const phoneRegex = /^[0-9]{10}$/;
  
      // Check if the phone number matches the pattern
      const isValid = phoneRegex.test(value);
  
      return isValid ? null : { invalidPhoneNumber: true };
    };
  }


  export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value as string;
  
      if (!value) {
        return { required: true };
      }
      // Define a regular expression for a basic email pattern
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      // Check if the email matches the pattern
      const isValid = emailRegex.test(value);
  
      return isValid ? null : { invalidEmail: true };
    };
  }

  export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value as string;
  
      // Define password criteria
      const minLength = 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasDigit = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  
      // Check if the password meets the criteria
      const isValid =
        value.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar;
  
      return isValid ? null : { invalidPassword: true };
    };
  }


  export function confirmPasswordValidator(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.parent?.get(passwordControlName)?.value;
      const confirmPassword = control.value;
  
      // Check if the confirm password matches the original password
      const isValid = password === confirmPassword;
  
      return isValid ? null : { mismatchedPasswords: true };
    };
}
