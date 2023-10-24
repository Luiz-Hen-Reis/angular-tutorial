import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/first-component/second-component/second-component.component';
import { EventsComponent } from './components/events/events.component';
import { ListRendersComponent } from './components/list-renders/list-renders.component';
import { PipeTwdbComponent } from './components/pipe-twdb/pipe-twdb.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    EventsComponent,
    ListRendersComponent,
    PipeTwdbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
