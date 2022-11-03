import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './interfaces/user';
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

  getUser(name: String): Observable<User> {
    const user = usersData.find(user => user.name === name)!;
    return of(user);
  }
}
