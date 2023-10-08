import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/counter.state';

const routes: Routes = [
  {
    path: '',
    component: MyComponentComponent,
  },
];

@NgModule({
  declarations: [MyComponentComponent, CustomInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ],
  exports: [RouterModule],
})
export class CounterModule {}
