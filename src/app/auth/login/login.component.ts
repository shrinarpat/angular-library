import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../state/auth.state';
import { loginStart } from '../state/auth.actions';
import { setLoading } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getEmailErrors() {
    if (this.email?.touched && this.email.invalid) {
      if (this.email.errors?.['required']) {
        return 'Email is a required field';
      }

      if (this.email?.errors?.['email']) {
        return 'Please enter a valid email';
      }
    }

    return null;
  }

  getPasswordErrors() {
    if (this.password?.touched && this.password.invalid) {
      if (this.password?.errors?.['required']) {
        return 'Password is a required field';
      }
    }
    return null;
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // TODO: login action
      this.store.dispatch(setLoading({ showLoading: true }));
      this.store.dispatch(loginStart(this.loginForm.value));
    } else {
      alert('Invalid email or password');
    }
  }
}
