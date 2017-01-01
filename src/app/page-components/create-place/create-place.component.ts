import { Component, Input } from '@angular/core';
import { Place } from '../../_models';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService, UserService, PlacesService } from '../../_services';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-place.component.html'
})
export class CreatePlaceComponent {
    @Input() place: Place;


    constructor(
        private http: Http,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private placeService: PlacesService
    ) {
        this.place = {
            owner: JSON.parse(localStorage.getItem('currentUser')).user.username,
            info:'',
            img: '',
            name: '',
            rating: 1,
            lat: 0,
            lng :0
        }
    }
   
    onSubmit() {
        this.placeService.createPlace(this.place)
            .subscribe(
            data => {
                this.alertService.success(`${this.place.name} added successful to places gallery`, true);
                this.router.navigate(['/places']);
                this.alertService.clear(3000);
            },
            error => {
                this.alertService.error(error);
            });
    }
}