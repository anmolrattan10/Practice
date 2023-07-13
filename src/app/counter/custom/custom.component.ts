import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { COUNTER } from '../models/counter.model';
import { CUSTOM_INCREMENT_ACTION } from '../store/counter.actions';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  customCounterForm!: FormGroup;

  constructor(private store: Store<{ counter: COUNTER }>) {}

  ngOnInit(): void {
    this.createCustomCounterForm();
  }

  /**
   * @function to create custom counter input form.
   * @returns void.
   */
  createCustomCounterForm(): void {
    this.customCounterForm = new FormGroup({
      customCounterInput: new FormControl(null),
    });
  }

  /**
   * @function to increase counter by custom input.
   * @returns void.
   */
  onAdd(): void {
    this.store.dispatch(
      CUSTOM_INCREMENT_ACTION({
        count: this.customCounterForm.value.customCounterInput,
      })
    );

    this.customCounterForm.reset();
  }
}
