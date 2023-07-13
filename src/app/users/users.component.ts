import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { USER } from './models/users.model';
import { AppState } from '../store/app.state';
import { getUsers } from './store/users.selectors';
import {
  addUser,
  deleteUser,
  getMoney,
  sendMoney,
} from './store/users.actions';
import { EditUserService } from './services/edit-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  dataForm!: FormGroup;
  users!: Observable<USER[]>;
  usersSubscription!: Subscription;
  showAddForm = new BehaviorSubject<boolean>(true);

  constructor(
    private store: Store<AppState>,
    private editUserService: EditUserService
  ) {}

  ngOnInit(): void {
    this.createAddUserForm();
    this.getUsers();
    this.showAddUserForm();
  }

  createAddUserForm() {
    this.dataForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      money: new FormControl(null, Validators.required),
    });
  }

  showAddUserForm() {
    this.showAddForm.next(true);
  }

  getUsers() {
    this.users = this.store.select(getUsers);
  }

  addUser() {
    const user = {
      userName: this.dataForm.value.name,
      userMoney: this.dataForm.value.money,
    };
    this.store.dispatch(addUser({ user }));
    this.dataForm.reset();
  }

  onEdit(index: number) {
    this.editUserService.showEditForm(true);

    this.editUserService.isEditingSubject.subscribe((data) => {
      this.showAddForm.next(!data);
    });
  }

  sendMoney(index: number) {
    let user!: USER;
    this.usersSubscription = this.users.subscribe((data) => {
      user = data[index];
    });
    this.store.dispatch(sendMoney({ user }));
  }

  getMoney(index: number) {
    let user!: USER;
    this.users.subscribe((data) => {
      user = data[index];
    });
    this.store.dispatch(getMoney({ user }));
  }

  onDelete(userId: number | undefined) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(deleteUser({ userId }));
    }
  }

  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }
}
