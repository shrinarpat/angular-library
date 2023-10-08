import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users$: Observable<any>;
  users: any[];
  getUserSubscription: any;

  constructor(
    private _userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getUsersData();

    this.route.data.subscribe((data) => {
      // console.log(data['users'].users);
      this.users = data['users'].users;
    });
  }

  ngOnDestroy() {
    // console.log('ondestroy called');
    this.getUserSubscription?.unsubscribe();
  }

  getUsersData() {
    this.users$ = this._userService.getUsers();
    console.log(this.users$);
  }

  getUserData(id: string) {
    // console.log(id);
    this.getUserSubscription = this._userService
      .getUserData(id)
      .subscribe((res) => {
        console.log(res);
      });

    console.log(this.getUserSubscription);
  }
}
