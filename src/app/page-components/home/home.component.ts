import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';

import { User, Place } from '../../_models';
import { PlacesService } from '../../_services';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    places: Place[] = [];
    myInterval: number = 3000;

    constructor( private placeService: PlacesService) {
    }

    ngOnInit() {
        this.loadPlaces();
    }

    private loadPlaces() {
        this.placeService.getAll().subscribe(placesData => { this.places = placesData });
    }
}