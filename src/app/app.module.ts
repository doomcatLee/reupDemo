//           GENERAL LIBRARIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//           GENERAL COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';
import { DispatchComponent } from './dispatch/dispatch.component';
import { ProductComponent } from './product/product.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HistoryComponent } from './history/history.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DispensariesComponent } from './dispensaries/dispensaries.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DispatchComponent,
    DispatchComponent,
    ProductComponent,
    AnalyticsComponent,
    HistoryComponent,
    ProductDetailComponent,
    DispensariesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
