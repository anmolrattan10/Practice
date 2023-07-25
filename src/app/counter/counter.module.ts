import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';
import { CustomComponent } from './custom/custom.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { COUNTER_STATE_NAME } from './store/counter.selectors';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [CounterComponent, CustomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ],
})
export class CounterModule {}
