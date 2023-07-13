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

  /**
   * @function that runs when the component is initialized.
   * @returns void.
   */
  ngOnInit(): void {
    this.getCounterState();
  }

  /**
   * @function to get counter state from store.
   * @returns void.
   */
  getCounterState(): void {
    this.counterSubscription = this.store
      .select('counter')
      .subscribe((data) => {
        this.counter = data.counter;
      });
  }

  /**
   * @function to increment the counter by 1.
   * @returns void.
   */
  increment(): void {
    this.store.dispatch(INCREMENT_ACTION());
  }

  /**
   * @function to decrement counter by 1.
   * @returns void.
   */
  decrement(): void {
    this.store.dispatch(DECREMENT_ACTION());
  }

  /**
   * @function to reset the counter.
   * @returns void.
   */
  reset(): void {
    this.store.dispatch(RESET_ACTION());
  }

  /**
   * @function that runs when the component is destroyed.
   * @returns void.
   */
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
