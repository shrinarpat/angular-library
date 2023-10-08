import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-lifecycle-hooks-parent',
  templateUrl: './lifecycle-hooks-parent.component.html',
  styleUrls: ['./lifecycle-hooks-parent.component.scss'],
})
export class LifecycleHooksParentComponent implements OnInit {
  count: number = 0;
  isCounterChange: boolean = false;
  user: UserModel = { id: 10, name: 'Narpat' };
  message: string = 'I love you all!!';

  constructor() {
    // console.log('Parent component constructor!');
  }

  ngOnInit(): void {
    // console.log('Parent component ng onInit');
  }

  counter(): void {
    this.count++;
    this.isCounterChange = true;
    this.user.id = this.count;
    this.message = this.message + this.count;
  }
}
