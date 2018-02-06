import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../services/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { ScoutDetailComponent } from '../scout-detail/scout-detail.component';
import { ScoutListComponent } from '../scout-list/scout-list.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { AdvancementListComponent } from '../advancement-list/advancement-list.component';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent, 
    pathMatch: 'full' 
  },
  { 
    path: 'scouts', 
    component: ScoutListComponent, 
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: 'scouts/:id',
    component: ScoutDetailComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  { 
    path: 'sign-in', 
    component: SignInComponent, 
    pathMatch: 'full' 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
