import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FlashmsgComponent } from './components/flashmsg/flashmsg.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/jobs/add/add.component';
import { EditComponent } from './components/jobs/edit/edit.component';
import { ListComponent } from './components/jobs/list/list.component';
import { DetailsComponent } from './components/jobs/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { SubAComponent } from './components/sub-nav/sub-a/sub-a.component';
import { SubBComponent } from './components/sub-nav/sub-b/sub-b.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    DetailsComponent,
    MainNavComponent,
    FlashmsgComponent,
    LoginComponent,
    DashboardComponent,
    EditComponent,
    SubNavComponent,
    SubAComponent,
    SubBComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
