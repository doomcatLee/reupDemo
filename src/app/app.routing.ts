import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { ProductComponent } from './product/product.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HistoryComponent } from './history/history.component';

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
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//export ROUTES
