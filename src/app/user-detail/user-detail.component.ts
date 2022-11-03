import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  @Input() user?: User;

  getUser(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.userService.getUser(name).subscribe(user => this.user = user);
  }

  return(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
  