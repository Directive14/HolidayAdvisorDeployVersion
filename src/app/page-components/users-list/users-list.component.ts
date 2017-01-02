import { Component, OnInit, Input, transition, animate, state, style, trigger } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', animate(300, style({transform: 'translateY(100%)', opacity: 0})))
    ])
  ]
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

                let storageUser = this.usersService.getCurrentUser();
                this.currentUser.username = storageUser.username;

                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].username === this.currentUser.username) {
                        this.users.splice(i,1);
                    }
                }
            });
    }
}
