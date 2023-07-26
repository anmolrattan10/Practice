import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AppState } from './store/app.state';
import { autoLogin } from './auth/store/auth.actions';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.autoLogin();
    this.showError();
    this.showLoader();
  }

  autoLogin() {
    this.store.dispatch(autoLogin());
  }

  showLoader() {
    this.showLoading = this.store.select(getLoading);
  }

  showError() {
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
