import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-tut',
  templateUrl: './ngfor-tut.component.html',
  styleUrls: ['./ngfor-tut.component.scss'],
})
export class NgforTutComponent {
  users = ['Narpat', 'John', 'Rajat', 'Sonu'];

  employeeList = [
    {
      name: 'Narpat',
      age: 25,
      dob: '12-05-98',
      email: 'abc@test.com',
    },
    {
      name: 'John',
      age: 25,
      dob: '12-05-98',
      email: 'abc1@test.com',
    },
    {
      name: 'Rajat',
      age: 25,
      dob: '12-05-98',
      email: 'abc2@test.com',
    },
    {
      name: 'Sonu',
      age: 25,
      dob: '12-05-98',
      email: 'abc3@test.com',
    },
    {
      name: 'Mahira',
      age: 25,
      dob: '12-05-98',
      email: 'abc4@test.com',
    },
  ];

  refreshEmployeeList() {
    this.employeeList = [
      {
        name: 'Narpat',
        age: 25,
        dob: '12-05-98',
        email: 'abc@test.com',
      },
      {
        name: 'John',
        age: 25,
        dob: '12-05-98',
        email: 'abc1@test.com',
      },
      {
        name: 'Rajat',
        age: 25,
        dob: '12-05-98',
        email: 'abc2@test.com',
      },
      {
        name: 'Sonu',
        age: 25,
        dob: '12-05-98',
        email: 'abc3@test.com',
      },
      {
        name: 'Mahira',
        age: 25,
        dob: '12-05-98',
        email: 'abc4@test.com',
      },
      {
        name: 'Rachita',
        age: 25,
        dob: '12-05-98',
        email: 'abc5@test.com',
      },
    ];
  }

  trackRefresh(index: number, employee: any): string {
    return employee.name;
  }
}
