import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

const passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  return password == passwordConfirm ? null : { mismatch: true };
};

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  register: FormGroup;

  name: FormControl = new FormControl('');
  updateName: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.register = new FormGroup(
      {
        firstname: new FormControl<string | null>('', [Validators.required]),
        lastname: new FormControl<string | null>('', [Validators.required]),
        email: new FormControl<string | null>('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl<string | null>('', [Validators.required]),
        passwordConfirm: new FormControl<string | null>('', [
          Validators.required,
        ]),
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  handleReactiveForm(): void {
    console.log('inside Reactive Form');
    if (this.register.valid) {
      console.log('valid form');
      console.log(this.register.value);
    } else {
      alert('Please enter valid form values');
    }
  }

  updateUserName(): void {
    this.name.setValue(this.updateName.value);
  }
}
