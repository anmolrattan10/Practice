import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [CounterComponent, CustomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CounterModule {}
