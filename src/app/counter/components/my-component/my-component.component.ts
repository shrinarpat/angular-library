import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  customIncrement,
} from '../../state/counter.action';

import { CounterState } from 'src/app/models/counter.model';
import { getCounter } from '../../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent implements OnInit, OnDestroy {
  counter: number;
  counter$: Observable<number>;
  allSubscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // TODO: connect this.counter stream to current state counter
    // METHOD: One
    const subs = this.store.select(getCounter).subscribe((counterData) => {
      this.counter = counterData;
    });
    this.allSubscriptions.push(subs);

    // METHOD: Two
    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
    this.allSubscriptions.forEach((s) => s?.unsubscribe());
  }

  increment() {
    // TODO: dispatch an incremnet action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: dispatch an decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: dispatch an reset action
    this.store.dispatch(reset());
  }
}
