import { Component } from '@angular/core';
import {
  Observable,
  from,
  interval,
  fromEvent,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { map, filter, take, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-tut',
  templateUrl: './rxjs-tut.component.html',
  styleUrls: ['./rxjs-tut.component.scss'],
})
export class RxjsTutComponent {
  itemPrice: number = 1;
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  filterCondition: string = 'odd';
  takeItemCount: number = 2;
  timeInterval: number = 1000;
  userId: string = '1';

  createObservable(): Observable<number> {
    //* Creating the observable from the existing plain array
    return from(this.items);
  }

  calculatePrice() {
    const items$: Observable<number> = this.createObservable();

    items$.pipe(map((item) => item * this.itemPrice)).subscribe((item) => {
      console.log(item);
    });
  }

  filterItemByQuantity(): void {
    const items$: Observable<number> = this.createObservable();

    if (this.filterCondition == 'odd') {
      items$.pipe(filter((item) => item % 2 != 0)).subscribe((item) => {
        console.log(item);
      });
    }

    if (this.filterCondition == 'even') {
      items$.pipe(filter((item) => item % 2 == 0)).subscribe((item) => {
        console.log(item);
      });
    }
  }

  takeItem(): void {
    const items$: Observable<number> = this.createObservable();

    items$.pipe(take(this.takeItemCount)).subscribe((item) => {
      console.log(item);
    });
  }

  generateNumber(): void {
    let observalbe = interval(this.timeInterval);

    let sub = observalbe.subscribe((item) => {
      console.log(item);
    });

    setTimeout(() => {
      sub.unsubscribe();
    }, 5000);
  }

  getUsers(): void {
    const items$: Observable<number> = this.createObservable();

    items$
      .pipe(
        mergeMap((value) => {
          // Perform an asynchronous operation and return an observable
          return from(fetch(`https://dummyjson.com/users/${value}`));
        })
      )
      .subscribe((result) => {
        const reader = result.body?.getReader();
        // console.log(reader);
        reader?.read().then(({ done, value }) => {
          console.log(value);
        });
      });
  }

  async fetchData() {
    return fetch(`https://dummyjson.com/users/${this.userId}`);
  }

  getResults(): void {
    const test$ = from('hello');

    test$
      .pipe(
        switchMap(() => {
          return this.fetchData();
        })
      )
      .subscribe((result) => {
        console.log(result);
      });
  }

  subscriber(result: any) {
    console.log(result);
  }

  generateObservable() {
    // const observable = new Observable(function subscribe(subscirber) {
    //   subscirber.next(1);
    //   subscirber.next(2);
    // });

    // observable.subscribe((result) => {
    //   console.log(result);
    // });

    // const subject = new Subject<number>();

    // subject.subscribe(this.subscriber);

    // subject.subscribe(this.subscriber);

    // subject.next(1);
    // subject.next(2);

    const behaviorSubject = new BehaviorSubject<number>(0);

    behaviorSubject.subscribe((result) => {
      console.log('A', result);
    });

    behaviorSubject.next(1);
    behaviorSubject.next(2);

    behaviorSubject.subscribe((result) => {
      console.log('B', result);
    });

    behaviorSubject.next(3);
  }
}
