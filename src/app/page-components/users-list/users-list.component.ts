import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
    found: Object;
    @Input() users: User[];
    @Input() currentUser: User = new User;
    constructor(
        private http: Http,
        private usersService: UserService
    ) {
        this.users = [];
    }
    ngOnInit() {
        this.usersService.getAll()
            .subscribe(usersJson => {
                this.users.push(...usersJson)

                let storageUser = JSON.parse(localStorage.getItem('currentUser')).user;
                this.currentUser.username = storageUser.username;

                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].username === this.currentUser.username) {
                        this.users.splice(i,1);
                    }
                }
            });
    }
}
