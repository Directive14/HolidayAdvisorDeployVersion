import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
    @Input() currentUser: User = JSON.parse(localStorage.getItem('currentUser')).user;
     storageUser: User;

    constructor(private userService: UserService) {
        this.storageUser=new User;
    }
    ngOnInit() {
        let storageUserUsername = JSON.parse(localStorage.getItem('currentUser')).user.username;
        this.userService.getByUsername(storageUserUsername).subscribe(dbUser => this.currentUser = dbUser);
    }
}