import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dispatch',
    component: DispatchComponent
  }
  ,
  {
    path: 'product',
    component: ProductComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//export ROUTES
