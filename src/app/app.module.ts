import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeListComponent } from './home/home-list.component';
import { DetailComponent } from './detail/detail.component';

import { routing } from './app.routes';
import {NutanixService} from '../app/dataservices/nutanix.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeListComponent,
    DetailComponent
  ],
   providers: [
   NutanixService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}

