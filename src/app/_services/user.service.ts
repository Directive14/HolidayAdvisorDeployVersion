import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('https://holiday-advisor.herokuapp.com/api/users').map((response: Response) => response.json());
    }

    getByUsername(username) {
        return this.http.get('https://holiday-advisor.herokuapp.com/api/users/'+ String(username))
            .map((res: Response) => res.json())
    }

    // getById(id: number) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    create(user: User) {
        return this.http.post('https://holiday-advisor.herokuapp.com/api/signup', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
         return this.http.put('https://holiday-advisor.herokuapp.com/api/users/' + user.username, user).map((response: Response) => response.json());
    }

    // delete(id: number) {
    //     return this.http.delete('http://localhost:3000/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}