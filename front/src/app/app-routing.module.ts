import {RouterModule, Route, UrlSerializer} from '@angular/router';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

// Components
import {
  AddComponent,
  LoginComponent,
  ListComponent,
  DetailsComponent,
  EditComponent,
  HomeComponent,
  MainNavComponent,
  SubNavComponent,
  SubAComponent,
  SubBComponent
} from './components';

// Interceptors
import {
  WithCredentialInterceptor,
  ApiUrlInterceptor,
  API_URL
} from './interceptors';

// import {CleanUrlSerializer} from './helpers/url-serializer';
import {AuthGuard} from './guards/auth.guard';
import {environment} from 'src/environments/environment.prod';

const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {
    path: 'jobs',
    component: MainNavComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {
        path: 'subnav',
        component: SubNavComponent,
        children: [
          {
            path: 'a',
            component: SubAComponent,
            outlet: 'submenu'
          },
          {
            path: 'b',
            component: SubBComponent,
            outlet: 'submenu'
          }
        ]
      },
      {path: 'list', component: ListComponent},
      {path: 'add', component: AddComponent},
      {path: 'edit/:id', component: EditComponent},
      {path: ':id', component: DetailsComponent},
    ]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
      deps: [API_URL]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
