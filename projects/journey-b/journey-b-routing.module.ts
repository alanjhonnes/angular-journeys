import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JourneyBRouteComponent } from './journey-b-route/journey-b-route.component';


const routes: Routes = [{
  path: 'route-b',
  component: JourneyBRouteComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
  })],
  exports: [RouterModule]
})
export class JourneyBRoutingModule { }
