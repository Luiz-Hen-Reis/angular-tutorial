import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EventsComponent } from './components/events/events.component';
import { PipeTwdbComponent } from './components/pipe-twdb/pipe-twdb.component';
import { ListRendersComponent } from './components/list-renders/list-renders.component';
import { ComponentServiceComponent } from './components/component-service/component-service.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'events', component: EventsComponent },
  { path: 'twdb', component: PipeTwdbComponent },
  { path: 'list-renders', component: ListRendersComponent },
  { path: 'services', component: ComponentServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
