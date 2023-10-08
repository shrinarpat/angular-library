import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { NgTemplatesComponent } from './components/ng-templates/ng-templates.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { NgContentsComponent } from './components/ng-contents/ng-contents.component';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';
import { LifecycleHooksParentComponent } from './components/lifecycle-hooks-parent/lifecycle-hooks-parent.component';
import { PipeTutorialComponent } from './components/pipe-tutorial/pipe-tutorial.component';
import { FormsComponent } from './components/forms/forms.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { NgforTutComponent } from './components/ngfor-tut/ngfor-tut.component';
import { RxjsTutComponent } from './components/rxjs-tut/rxjs-tut.component';
import { ChartComponent } from './components/chart/chart.component';
import { BootstrapTutComponent } from './components/bootstrap-tut/bootstrap-tut.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { UsersComponent } from './components/users/users.component';

//* Route Resolver
import { userResolver } from './shared/route-resolver';
import { ObservablesTutComponent } from './components/observables-tut/observables-tut.component';
import { SubjectsComponent } from './components/subjects/subjects.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'observables',
    component: ObservablesTutComponent,
  },
  {
    path: 'subject',
    component: SubjectsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: { users: userResolver },
  },
  {
    path: 'bootstrap',
    component: BootstrapTutComponent,
    pathMatch: 'full',
  },
  {
    path: 'chart',
    component: ChartComponent,
    pathMatch: 'full',
  },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/post.module').then((m) => m.PostModule),
  },
  {
    path: 'rxjs-tut',
    component: RxjsTutComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
  },
  {
    path: 'ngfor-tut',
    component: NgforTutComponent,
  },
  {
    path: 'binding',
    component: BindingsComponent,
  },
  {
    path: 'pipe-tutorial',
    component: PipeTutorialComponent,
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksParentComponent,
  },
  {
    path: 'ng-template',
    component: NgTemplatesComponent,
  },
  {
    path: 'ng-container',
    component: NgContainerComponent,
  },
  {
    path: 'custom-directive',
    component: CustomDirectiveComponent,
  },
  {
    path: 'ng-content',
    component: NgContentsComponent,
  },
  {
    path: 'dom-manipulation',
    component: DomManipulationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
