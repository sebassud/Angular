import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthenticationService } from "../services/authentication.service";
import { LoggerService } from "../services/logger.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private logger: LoggerService
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err) => {
                if (
                    [401].includes(err.status) &&
                    this.authenticationService.isLogged
                ) {
                    this.authenticationService.setUser(null);
                }
                if (err.status === 500) this.logger.error(err.error);

                return throwError(err);
            })
        );
    }
}
