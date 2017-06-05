import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent, NavigationHoverDirective } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PlacesService, PartnerService, FeedService } from './_services';
import { AboutComponent } from './page-components/about';
import { HomeComponent } from './page-components/home';
import { LoginComponent } from './page-components/login';
import { RegisterComponent } from './page-components/register';
import { PlaceListComponent } from './page-components/places-list';
import { PlaceSingleComponent } from './page-components/place-single';
import { PartnerListComponent } from './page-components/partners-list';
import { CreatePlaceComponent } from './page-components/create-place';
import { CreatePartnerComponent } from './page-components/create-partner';
import { ProfileComponent } from './page-components/profile';
import { NotFoundComponent } from './page-components/not-found';
import { NotLoggedInComponent } from './page-components/not-loggedin';
import { StarRatingComponent } from './page-components/star-rating/star-rating.component';
import { FilterPlaces, SortPlacesBy, OrderPlacesBy, StripHtmlTagsPipe, PlacesPagingPipe } from './_pipes';
import { DropdownNotClosableZone, Dropdown, DropdownOpen } from './_directives/index';
import { AgmCoreModule } from '../../node_modules/angular2-google-maps/core';
import { GoogleMapComponent } from './page-components/google-map';
import { UpdateProfileComponent } from './page-components/update-profile/update-profile.component';
import { OtherPersonProfileComponent } from './page-components/other-person-profile/other-person-profile.component';
import { UsersListComponent } from './page-components/users-list/users-list.component';
import { FeedSingleComponent } from './page-components/feed-single/feed-single.component';
import { FeedListComponent } from './page-components/feed-list/feed-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CarouselModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBUNOpKQmGUbyUscx6cY9ElcEXLxws66ac'
        })
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        PlaceListComponent,
        PlaceSingleComponent,
        CreatePlaceComponent,
        CreatePartnerComponent,
        PartnerListComponent,
        StarRatingComponent,
        ProfileComponent,
        FilterPlaces,
        SortPlacesBy,
        OrderPlacesBy,
        NavigationHoverDirective,
        Dropdown,
        DropdownNotClosableZone,
        DropdownOpen,
        GoogleMapComponent,
        UpdateProfileComponent,
        OtherPersonProfileComponent,
        UsersListComponent,
        FeedSingleComponent,
        NotFoundComponent,
        NotLoggedInComponent,
        FeedListComponent,
        StripHtmlTagsPipe,
        PlacesPagingPipe
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PlacesService,
        PartnerService,
        FeedService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
