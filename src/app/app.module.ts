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
import { CatalogDetailsComponent } from './catalogs/catalog-details/catalog-details.component';
import { CatalogListComponent } from './catalogs/catalog-list/catalog-list.component';
import { CreateCatalogButtonComponent } from './catalogs/create-catalog-button/create-catalog-button.component';
import { MyCatalogsComponent } from './catalogs/my-catalogs/my-catalogs.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RatingComponent } from './components/rating/rating.component';
import { SearchComponent } from './components/search/search.component';
import { SliderRatingComponent } from './components/slider-rating/slider-rating.component';
import { SliderComponent } from './components/slider/slider.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorsHandlerComponent } from './shared/components/form/errors-handler/errors-handler.component';
import { MarkInvalidDirective } from './shared/components/form/mark-invalid/mark-invalid.directive';
import { SafePipe } from './shared/pipes/safe.pipe';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { CatalogMovieComponent } from './catalogs/catalog-movie/catalog-movie.component';
import { CatalogSearchComponent } from './catalogs/catalog-search/catalog-search.component';
import { AddMovieToCatalogComponent } from './catalogs/add-movie-to-catalog/add-movie-to-catalog.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        HomeComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        CatalogDetailsComponent,
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
        ProfileComponent,
        SliderRatingComponent,
        MyCatalogsComponent,
        SvgIconComponent,
        CreateCatalogButtonComponent,
        CatalogListComponent,
        CatalogMovieComponent,
        CatalogSearchComponent,
        AddMovieToCatalogComponent
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
