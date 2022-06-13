import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';

import { environment } from './environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'group-detail/:name', loadComponent: () => import('./app/group-detail/group-detail.component').then(f => f.GroupDetailComponent) }
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
