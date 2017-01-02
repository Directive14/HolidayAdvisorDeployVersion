import { Component, OnInit, Input, transition, state, trigger, style, animate } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Place } from '../../_models';
import { PlacesService } from '../../_services';
import { StarRatingComponent } from '../star-rating';

@Component({
    templateUrl: './place-list.component.html',
    styleUrls:  ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
    ratingClicked: number;
    itemIdRatingClicked: number;
    @Input() places: Place[];
    constructor(
        private http: Http,
        private placesService: PlacesService
    ) {
        this.places = [];
    }
    ngOnInit() {
        this.placesService.getAll()
            .subscribe(placesJson => this.places.push(...placesJson));
    }

     SearchByTitle(value:any){
         let result=[].concat(this.places);
         return result.filter(p=>p.name.indexOf(value)>0); 
    }

    ratingComponetClick(clickObj: any): void {
        let item = this.places.filter((item: any) => item._id === clickObj.itemId);
        if (!!item && item.length === 1) {
            item[0].rating = clickObj.rating;
            this.ratingClicked = clickObj.rating;
            this.itemIdRatingClicked = clickObj.itemId;
            this.placesService.updatePlace(item[0]).subscribe(dbItem=>item[0].rating=dbItem.rating)
        }
    }
}