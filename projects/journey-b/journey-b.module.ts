import { NgModule, DoBootstrap, Injector, ApplicationRef } from '@angular/core';
import { JourneyBComponent } from './journey-b/journey-b.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { JourneyBRoutingModule } from './journey-b-routing.module';
import { JourneyBRouteComponent } from './journey-b-route/journey-b-route.component';


@NgModule({
  declarations: [
    JourneyBComponent,
    JourneyBRouteComponent
  ],
  imports: [
    BrowserModule,
    JourneyBRoutingModule,
  ],
  entryComponents: [
    JourneyBComponent,
  ]
})
export class JourneyBModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log('bootstrap b');
    if (!customElements.get('journey-b-element')) {
      console.log('initializing custom element b');
      const journeyBElement = createCustomElement(JourneyBComponent, {
        injector: this.injector,
      });
      customElements.define('journey-b-element', journeyBElement);
    }
  }

}
