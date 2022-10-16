import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ErrorsHandlerComponent } from './form/errors-handler/errors-handler.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        HomeComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        ErrorsHandlerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
