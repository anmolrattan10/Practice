import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducer';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [{ path: 'edit/:userId', component: EditUserComponent }],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', usersReducer),
  ],
  declarations: [UsersComponent, EditUserComponent],
})
export class UsersModule {}
