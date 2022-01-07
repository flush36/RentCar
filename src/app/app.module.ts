import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandlesInterceptor } from './core/authentication/handles.interceptor';
import { HeadersInterceptor } from './core/authentication/headers.interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandlesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  //teste
}
