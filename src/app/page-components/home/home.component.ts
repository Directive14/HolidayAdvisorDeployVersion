import { Component, OnInit } from '@angular/core';

import { User, Place } from '../../_models';
import { UserService, PlacesService } from '../../_services';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    places: Place[] = [];
    myInterval: number = 3000;

    constructor(private userService: UserService, private placeService: PlacesService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadPlaces();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadPlaces() {
        this.placeService.getAll().subscribe(placesData => { this.places = placesData });
    }
}