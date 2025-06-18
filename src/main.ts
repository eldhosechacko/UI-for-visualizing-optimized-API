/*
----------------------------------------------------------------------
File: /src/main.ts
----------------------------------------------------------------------
*/
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './app/error.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    // Provide HttpClient and register our interceptor
    provideHttpClient(
      withInterceptors([errorInterceptor])
    )
  ]
}).catch(err => console.error(err));