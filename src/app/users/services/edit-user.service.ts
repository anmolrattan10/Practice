import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  isEditingSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  showEditForm(data: boolean) {
    this.isEditingSubject.next(data);
  }
}
