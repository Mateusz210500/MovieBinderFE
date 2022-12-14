import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogDetailsComponent } from './catalogs/catalog-details/catalog-details.component';
import { MyCatalogsComponent } from './catalogs/my-catalogs/my-catalogs.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'listing', component: ListingComponent, canActivate: [AuthGuard] },
    { path: 'details', component: DetailsComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'catalogDetails', component: CatalogDetailsComponent, canActivate: [AuthGuard] },
    { path: 'myCatalogs', component: MyCatalogsComponent, canActivate: [AuthGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
