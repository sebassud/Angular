import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { MatNativeDateModule } from "@angular/material/core";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { GlobalErrorHandler } from "./core/handlers/globalError.handler";
import { HttpErrorInterceptor } from "./core/interceptors/httpError.interceptor";
import { JwtInterceptor } from "./core/interceptors/jwt.interceptor";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        MatNativeDateModule,
        AppRoutingModule,
        CoreModule,
        LayoutModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
