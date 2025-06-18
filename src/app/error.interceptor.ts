/*
----------------------------------------------------------------------
File: /src/app/error.interceptor.ts
----------------------------------------------------------------------
*/
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 429) {
        // Handle rate limiting error
        alert('Too many requests. Please slow down and try again later.');
      }
      // Re-throw the error to be handled by other parts of the application
      return throwError(() => error);
    })
  );
};