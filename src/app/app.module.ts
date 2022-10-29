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
import { RatingComponent } from './components/rating/rating.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ErrorsHandlerComponent } from './shared/components/form/errors-handler/errors-handler.component';
import { MarkInvalidDirective } from './shared/components/form/mark-invalid/mark-invalid.directive';
import { SafePipe } from './shared/pipes/safe.pipe';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';

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
        RatingComponent,
        FooterComponent,
        SafePipe,
        ProfileComponent
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
