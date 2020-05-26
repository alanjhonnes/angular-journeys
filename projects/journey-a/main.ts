import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JourneyAModule } from './journey-a.module';

export function bootstrapJourneyA(){
  return platformBrowserDynamic().bootstrapModule(JourneyAModule)
    .catch(err => console.error(err));
}

