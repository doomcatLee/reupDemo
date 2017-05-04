//           GENERAL LIBRARIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//           GENERAL COMPONENTS
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';
import { QueueDispatchComponent } from './queue-dispatch/queue-dispatch.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { ProductComponent } from './product/product.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HistoryComponent } from './history/history.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QueueDispatchComponent,
    DispatchComponent,
    ProductComponent,
    AnalyticsComponent,
    HistoryComponent,
    ProductDetailComponent
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
