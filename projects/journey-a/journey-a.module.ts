import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { JourneyAComponent } from './journey-a/journey-a.component';
import { Route, RouterModule } from '@angular/router';
import { JourneyARouteComponent } from './journey-a-route/journey-a-route.component';
import { ComponentAModule } from 'mjv-component-library';

const routes: Route[] = [
  {
    path: 'route',
    component: JourneyARouteComponent,
  }
];

@NgModule({
  declarations: [JourneyAComponent, JourneyARouteComponent],
  imports: [
    CommonModule,
    ComponentAModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ]
})
export class JourneyAModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log('bootstrap a');
    const journeyAElement = createCustomElement(JourneyAComponent, {
      injector: this.injector,
    });
    customElements.define('journey-a-element', journeyAElement);
  }

}
