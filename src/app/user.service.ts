import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import usersData from './data/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return usersData
  }
}
