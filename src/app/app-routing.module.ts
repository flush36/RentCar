import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'location',
    loadChildren: () =>
      import('./modules/location/location.module').then(
        (m) => m.LocationModule
      ),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('./core/header/header/header.module').then((m) => m.HeaderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
