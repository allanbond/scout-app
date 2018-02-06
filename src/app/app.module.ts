import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ScoutListComponent } from './scout-list/scout-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AdvancementListComponent } from './advancement-list/advancement-list.component';
import { InitialsPipe } from './initials.pipe';
import { ScoutOverviewComponent } from './scout-overview/scout-overview.component';
import { NewScoutFormComponent } from './new-scout-form/new-scout-form.component';
import { ScoutDetailComponent } from './scout-detail/scout-detail.component';

import { AuthGuardService } from './services/auth-guard.service';
import { ScoutService } from './services/scout.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoutListComponent,
    SignInComponent,
    HomeComponent,
    AvatarComponent,
    AdvancementListComponent,
    InitialsPipe,
    ScoutOverviewComponent,
    NewScoutFormComponent,
    ScoutDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService, ScoutService],
  bootstrap: [AppComponent],
  entryComponents: [NewScoutFormComponent]
})
export class AppModule { }
