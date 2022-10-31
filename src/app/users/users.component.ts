import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import usersData from './users.json';  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users: User[] = usersData;  
  selectedUser?: User;

  showDetails(user: User): void {
    this.selectedUser = user; 
  }

  ngOnInit(): void {
  }

}
