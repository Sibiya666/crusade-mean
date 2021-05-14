import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';


import { NgxsModule } from '@ngxs/store';
import { AuthErrorInterceptor } from './core/interceptors/auth-error.interceptor';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxsModule.forRoot(),
        PortalModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthErrorInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
