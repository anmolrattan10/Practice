import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  DECREMENT_ACTION,
  INCREMENT_ACTION,
  RESET_ACTION,
} from './store/counter.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  counter!: number;
  counterSubscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counter')
      .subscribe((data) => {
        this.counter = data.counter;
      });
  }

  increment() {
    this.store.dispatch(INCREMENT_ACTION());
  }

  decrement() {
    this.store.dispatch(DECREMENT_ACTION());
  }

  reset() {
    this.store.dispatch(RESET_ACTION());
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
