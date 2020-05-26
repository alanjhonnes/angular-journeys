import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JourneyBModule } from './journey-b.module';

export function bootstrapJourneyB() {
  return platformBrowserDynamic().bootstrapModule(JourneyBModule)
  .catch(err => console.error(err));
}
