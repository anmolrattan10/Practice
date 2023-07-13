import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { USER } from '../models/users.model';
import { AppState } from '../../store/app.state';
import { editUser } from '../store/users.actions';
import { getUserById } from '../store/users.selectors';
import { EditUserService } from '../services/edit-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  editDataForm!: FormGroup;
  editUserSubscription!: Subscription;
  user: any;
  userId!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private editUserService: EditUserService
  ) {}

  ngOnInit(): void {
    this.addUserDetailsToForm();
  }

  addUserDetailsToForm() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId');

      this.editUserSubscription = this.store
        .select(getUserById(this.userId))
        .subscribe((data) => {
          this.user = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.editDataForm = new FormGroup({
      editName: new FormControl(this.user.userName, Validators.required),
      editMoney: new FormControl(this.user.userMoney, Validators.required),
    });
  }

  onUpdate() {
    const userName = this.editDataForm.value.editName;
    const userMoney = this.editDataForm.value.editMoney;

    const user: USER = {
      userId: this.user.userId,
      userName,
      userMoney,
    };

    this.store.dispatch(editUser({ user }));
    this.editDataForm.reset();
    this.router.navigateByUrl('/users');
    this.editUserService.showEditForm(false);
  }

  ngOnDestroy(): void {
    if (this.editUserSubscription) {
      this.editUserSubscription.unsubscribe();
    }
  }
}
