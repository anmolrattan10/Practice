import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  isEditingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  showEditForm(data: boolean) {
    this.isEditingSubject.next(data);
  }

  getUsers() {
    return this.http.get(
      `https://vue-completecourse.firebaseio.com/posts.json`
    );
  }
}
