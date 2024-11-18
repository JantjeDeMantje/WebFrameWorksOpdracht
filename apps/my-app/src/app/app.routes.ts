import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from 'libs/frontend/features/src/lib/users/user-list/user-list.component';
import { UserDetailsComponent } from 'libs/frontend/features/src/lib/users/user-details/user-details.component';
import { UserEditComponent } from 'libs/frontend/features/src/lib/users/user-edit/user-edit.component';

export const appRoutes: Route[] = [
    //Hier komen de routes URL's
    {path : '',  pathMatch: 'full', redirectTo: 'dashboard'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', pathMatch: 'full', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users/new', component: UserEditComponent },
    { path: 'users/:id/new', component: UserEditComponent },




    { path: '**', redirectTo: 'dashboard' }
];
