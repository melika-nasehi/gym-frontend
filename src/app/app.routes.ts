import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { MembersComponent } from './pages/members/members';
// import { ClassesComponent } from './pages/classes/classes';
// import { SessionsComponent } from './pages/sessions/sessions';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'members', component: MembersComponent },
    //   { path: 'classes', component: ClassesComponent },
    //   { path: 'sessions', component: SessionsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
