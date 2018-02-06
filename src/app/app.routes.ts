import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    { path: 'scouts', component: }
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]