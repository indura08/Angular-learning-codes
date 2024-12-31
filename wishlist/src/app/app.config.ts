import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

 import { provideHttpClient } from '@angular/common/http';//menna methna mata wa hodama error ekak, meka methna noda angularn17 walla pita bah httpclient use krnna  

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()] //ethanin eka import krla methnd denna one 
};
