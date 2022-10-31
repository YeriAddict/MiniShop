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

  yeri :User = {
    id:1,
    name: "Yeri",
    email: "test@gmail.com",
    country: "France"
  }

  users: User[] = usersData;  

  ngOnInit(): void {
  }

}
