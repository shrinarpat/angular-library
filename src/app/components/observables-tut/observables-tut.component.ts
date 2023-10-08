import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Observable, fromEvent, from, interval, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

interface ProductSearch {
  products: any;
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-observables-tut',
  templateUrl: './observables-tut.component.html',
  styleUrls: ['./observables-tut.component.scss'],
})
export class ObservablesTutComponent implements OnDestroy, AfterViewInit {
  marks: number[] = [1, 2, 3];
  allSubscriptions: Subscription[] = [];
  url: string = 'https://dummyjson.com/products/search';
  searchObs$: Observable<any>;
  @ViewChild('btnEvent') btnEvent: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;

  ngOnDestroy(): void {
    this.allSubscriptions.forEach((s) => s?.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.fromEvents();
    this.typeAhead();
  }

  fromMarks() {
    const marksObservable = from(this.marks);
    const subs = marksObservable.subscribe({
      next: (value) => console.log('value ', value),
      error: (error) => console.log('error: ', error),
      complete: () => console.log('completed'),
    });

    this.allSubscriptions.push(subs);
  }

  fromInterval() {
    const timerObservable = interval(1000);
    const subs = timerObservable.subscribe({
      next: (value) => console.log('value ', value),
      error: (error) => console.log('error: ', error),
      complete: () => console.log('complete'),
    });
    this.allSubscriptions.push(subs);
  }

  fromEvents() {
    const fromClick = fromEvent(this.btnEvent.nativeElement, 'click');

    const subs = fromClick.subscribe({
      next: (event) => console.log('event: ', event),
      error: (error) => console.log('error: ', error),
      complete: () => console.log('complete'),
    });

    this.allSubscriptions.push(subs);
  }

  typeAhead() {
    const keyupEvent = fromEvent(this.searchInput.nativeElement, 'keyup');

    this.searchObs$ = keyupEvent.pipe(
      map((event: any) => (event.target as HTMLInputElement).value),
      filter((text) => text.length > 2),
      debounceTime(50),
      distinctUntilChanged(),
      switchMap((searchTerm) => ajax(`${this.url}?q=${searchTerm}`)),
      map((result: any) => result.response?.products)
    );

    // const subs = searchObs.subscribe({
    //   next: (result) => console.log(result),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete'),
    // });

    // this.allSubscriptions.push(subs);
  }

  runExampleOne() {
    /*
    Observable takes an callback function which accepts the observers as the arguments
    */
    const observable = new Observable((subscriber) => {
      console.log(typeof subscriber);
      console.log(subscriber);
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    // To invoke the observable and see this values we ahve to subscribe to it

    console.log('Just before the subscribe');

    //* Below this whole object is your subscriber - the argument to the the observable callback function

    // {
    //   next(x) {
    //     console.log('got value: ',x);
    //   },
    //   error(err) {
    //     console.log('Something went wrong: ', err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // }

    observable.subscribe({
      next(x) {
        console.log('got value: ', x);
      },
      error(err) {
        console.log('Something went wrong: ', err);
      },
      complete() {
        console.log('done');
      },
    });

    console.log('Just after the subscribe');
  }

  foo() {
    console.log('Hello');
    return 42;
  }

  fooObservable() {
    return new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
    });
  }

  achieveResult() {
    // using foo function
    const foo1 = this.foo.call(this);
    console.log(foo1);

    const foo2 = this.foo.call(this);
    console.log(foo2);

    // same thing as above using observables

    const observable = this.fooObservable();

    observable.subscribe((x) => {
      console.log(x);
    });

    observable.subscribe((x) => {
      console.log(x);
    });
  }
}
