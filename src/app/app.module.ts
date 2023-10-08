import { rootReducer } from './store/app.state';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modules import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Routing module import
import { AppRoutingModule } from './app-routing.module';

// store imports
import { counterReducer } from './counter/state/counter.reducer';

// Pipe imports
import { AgePipePipe } from './shared/pipes/age-pipe/age-pipe.pipe';

// directives imports
import { HoverHighlightDirective } from './directives/hover-highlight/hover-highlight.directive';

// Interceptors import
import { httpInterceptorProviders } from './http-interceptors';

// components imports
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MainComponent } from './layout/main/main.component';
import { declarations } from './components/components.index';

import { PostsComponent } from './posts/posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    MainComponent,
    HoverHighlightDirective,
    AgePipePipe,
    declarations,
    PostsComponent,
    AddPostComponent,
    EditPostComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer, {}),
    EffectsModule.forRoot([]),

    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode in production
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true, // If set to true, the connection is established outside the Angular zone for better performance
    }),

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
