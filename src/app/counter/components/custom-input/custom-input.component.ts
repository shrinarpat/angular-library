import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, updateAppName } from '../../state/counter.action';
import { CounterState } from 'src/app/models/counter.model';
import { getAppName } from '../../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  customValue: number;
  appName$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.appName$ = this.store.select(getAppName);
  }

  addValue() {
    this.store.dispatch(customIncrement({ value: +this.customValue }));
  }

  handleAppNameChange() {
    this.store.dispatch(updateAppName());
  }
}
