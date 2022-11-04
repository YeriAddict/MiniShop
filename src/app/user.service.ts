import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './interfaces/user';
import usersData from '../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  getUser(name: String): Observable<User> {
    const user = usersData.find(user => user.name === name)!;
    return of(user);
  }
}
