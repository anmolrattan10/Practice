import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  setErrorMessage,
  setLoadingSpinner,
} from '../../store/shared/shared.actions';
import { AppState } from '../../store/app.state';
import { signupStart } from '../store/auth.actions';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createSignUpForm();
    this.clearErrorMessage();
  }

  clearErrorMessage() {
    this.store.dispatch(setErrorMessage({ message: '' }));
  }

  createSignUpForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSignUp() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signupStart({ email, password }));
  }
}
