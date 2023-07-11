import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  FormInputValidator = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(20, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get name() {
    return this.FormInputValidator.get('name')?.valid;
  }
  get nameLength() {
    return this.FormInputValidator.get('name')?.value?.length;
  }
  get age() {
    return this.FormInputValidator.get('age')?.valid;
  }
  get ageValue() {
    return this.FormInputValidator.get('age')?.value;
  }
  get email() {
    return this.FormInputValidator.get('email')?.valid;
  }
}
