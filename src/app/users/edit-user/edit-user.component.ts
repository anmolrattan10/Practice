import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getUserById } from '../store/users.selectors';
import { USER } from '../models/users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  editDataForm!: FormGroup;
  user!: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('userId');
      this.store.select(getUserById, { userId }).subscribe((data) => {
        this.user = data;
      });
    });

    this.editDataForm = new FormGroup({
      editName: new FormControl(null, Validators.required),
      editMoney: new FormControl(null, Validators.required),
    });
  }

  editUser() {}

  onUpdate() {}
}
