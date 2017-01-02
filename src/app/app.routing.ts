import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './page-components/home';
import { AboutComponent } from './page-components/about';
import { LoginComponent } from './page-components/login';
import { RegisterComponent } from './page-components/register';
import { ProfileComponent } from './page-components/profile';
import { PlaceListComponent } from './page-components/places-list';
import { CreatePlaceComponent } from './page-components/create-place';
import { CreatePartnerComponent } from './page-components/create-partner';
import { PartnerListComponent } from './page-components/partners-list';
import { PlaceSingleComponent } from './page-components/place-single';
import { UsersListComponent} from  './page-components/users-list';
import { OtherPersonProfileComponent } from './page-components/other-person-profile';
import { UpdateProfileComponent } from './page-components/update-profile';
import {FeedListComponent} from './page-components/feed-list';
import { NotFoundComponent } from './page-components/not-found';
import { NotLoggedInComponent } from './page-components/not-loggedin';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'notfound', component: NotFoundComponent },
    { path: 'notloggedin', component: NotLoggedInComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersListComponent, canActivate: [AuthGuard]  },
    { path: 'profile/:username', component: OtherPersonProfileComponent, canActivate: [AuthGuard] },
    { path: 'update', component: UpdateProfileComponent, canActivate: [AuthGuard] },
    { path: 'places', component: PlaceListComponent, canActivate: [AuthGuard]  },
    { path: 'places/:name', component: PlaceSingleComponent, canActivate: [AuthGuard]  },
    { path: 'createplace', component: CreatePlaceComponent, canActivate: [AuthGuard]  },
    { path: 'partners', component: PartnerListComponent },
    { path: 'createPartner', component: CreatePartnerComponent, canActivate: [AuthGuard]  },
    { path: 'feed', component: FeedListComponent },
    // otherwise redirect to home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' },
];

export const routing = RouterModule.forRoot(appRoutes);