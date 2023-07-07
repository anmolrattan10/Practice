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
    this.customCounterForm = new FormGroup({
      customCounterInput: new FormControl(null),
    });
  }

  onAdd() {
    this.store.dispatch(
      CUSTOM_INCREMENT_ACTION({
        count: this.customCounterForm.value.customCounterInput,
      })
    );

    this.customCounterForm.reset();
  }
}
