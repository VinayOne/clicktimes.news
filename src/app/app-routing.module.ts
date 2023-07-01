import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'bootstrap',
  //   loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
  //     .then(mod => mod.TutorialModule)
  // },
  // {
  //   path: 'components',
  //   loadChildren: () => import('./modules/application/example-components/tutorial.module')
  //     .then(mod => mod.TutorialModule)
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('./modules/application/example-forms/tutorial.module')
  //     .then(mod => mod.TutorialModule)
  // },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./modules/application/example-services/tutorial.module')
  //     .then(mod => mod.TutorialModule)
  // },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/general/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./modules/general/entertainment/entertainment.module')
      .then(mod => mod.EntertainmentModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./modules/general/technology/technology.module')
      .then(mod => mod.TechnologyModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./modules/general/health/health.module')
      .then(mod => mod.HealthModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./modules/general/sports/sports.module')
      .then(mod => mod.SportsModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./modules/general/business/business.module')
      .then(mod => mod.BusinessModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }