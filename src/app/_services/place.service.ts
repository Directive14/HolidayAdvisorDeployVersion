import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlacesService {
    private url: string = 'https://holiday-advisor.herokuapp.com/api/places';

    constructor(private http: Http) { }

    createPlace(place) {
        return this.http.post(this.url, place)
            .map((res: Response) => res.json())
    }

    getAll() {
        return this.http.get(this.url)
            .map((res: Response) => res.json())
    }

    updatePlace(place) {
        return this.http.put(this.url, place)
            .map((res: Response) => res.json())
    }

    deleatePlace(placeName) {
        return this.http.delete(this.url + '/' + placeName)
            .map((res: Response) => res.json())
    }

    getByName(placeName) {
        return this.http.get(this.url + '/' + placeName)
            .map((res: Response) => res.json())
    }
}