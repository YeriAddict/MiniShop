import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { Observable, of } from 'rxjs';
import usersData from './data/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(usersData);
    return users;
  }
}
