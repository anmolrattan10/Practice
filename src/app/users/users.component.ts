import { Observable, Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { USER } from './models/users.model';
import { AppState } from '../store/app.state';
import { getUsers } from './store/users.selectors';
import { addUser, sendMoney } from './store/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  isEditing: boolean = false;
  dataForm!: FormGroup;
  users!: Observable<USER[]>;
  usersSubscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      money: new FormControl(null, Validators.required),
    });

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

  onEdit(i: number) {
    this.isEditing = true;

    // this.usersSubscription = this.users.subscribe((data) => {
    //   this.dataForm.setValue({
    //     name: data[i].userName,
    //     money: data[i].userMoney,
    //   });
    // });
  }

  onUpdate() {}

  sendMoney(i: number) {
    let user!: any;
    this.usersSubscription = this.users.subscribe((data) => {
      user = data[i];
    });
    this.store.dispatch(sendMoney({ user }));
  }

  getMoney() {
    // this.users[i].money = +userMoney - 10;
  }

  ngOnDestroy(): void {
    // this.usersSubscription.unsubscribe();
  }
}
