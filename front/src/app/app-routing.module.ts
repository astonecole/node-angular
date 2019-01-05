import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AddComponent } from './components/jobs/add/add.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/jobs/list/list.component';
import { DetailsComponent } from './components/jobs/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

import { WithCredentialInterceptor } from './helpers/with-credentials.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { EditComponent } from './components/jobs/edit/edit.component';

const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    {
        path: 'jobs',
        component: MainNavComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent, },
            { path: 'add', component: AddComponent },
            { path: 'edit/:id', component: EditComponent },
            { path: ':id', component: DetailsComponent },
        ]
    },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: WithCredentialInterceptor,
            multi: true
        }
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
