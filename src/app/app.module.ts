import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SliderComponent } from './components/slider/slider.component';
import { ErrorsHandlerComponent } from './form/errors-handler/errors-handler.component';
import { MarkInvalidDirective } from './form/mark-invalid/mark-invalid.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { DetailsComponent } from './details/details.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        HomeComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        ErrorsHandlerComponent,
        MarkInvalidDirective,
        CarouselComponent,
        SliderComponent,
        SearchComponent,
        ListingComponent,
        DetailsComponent,
        RatingComponent
    ],
    imports: [
        NgbModule,
        NgbPaginationModule,
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
