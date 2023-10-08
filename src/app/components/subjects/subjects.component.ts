import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
  subject = new Subject<number>();
  bSubject = new BehaviorSubject<number>(0);
  rSubject = new ReplaySubject(3);

  subscribeSubject() {
    console.log(this.subject);

    this.subject.subscribe((value) => {
      console.log('subscribe 1 value: ', value);
    });

    this.subject.subscribe((value) => {
      console.log('subscribe 2 value: ', value);
    });

    this.subject.next(1);
    this.subject.next(2);

    //* Below subscriber will only executed when their is new next call below it
    this.subject.subscribe((value) => {
      console.log('subscribe 3 value: ', value);
    });
  }

  BehSubscribeSubject() {
    console.log(this.bSubject);

    this.bSubject.subscribe((value) => {
      console.log('subscribe 1 value: ', value);
    });

    this.bSubject.subscribe((value) => {
      console.log('subscribe 2 value: ', value);
    });

    this.bSubject.next(1);
    this.bSubject.next(2);

    this.bSubject.subscribe((value) => {
      console.log('subscribe 3 value: ', value);
    });
  }

  ReplaySubscribeSubject() {
    this.rSubject.subscribe(value => {
      console.log('A: ', value);
    })

    this.rSubject.next(1);
    this.rSubject.next(2);
    this.rSubject.next(3);
    this.rSubject.next(4);

    this.rSubject.subscribe(value => {
      console.log('B: ', value);
    })

    this.rSubject.next(5);
  }
}
