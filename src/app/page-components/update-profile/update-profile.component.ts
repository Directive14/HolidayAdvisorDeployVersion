import { Component, Input} from '@angular/core';
import { User } from '../../_models';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserService} from '../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent{
  @Input() user: User = new User;

  constructor( private http: Http,
        private router: Router,
        private userService: UserService) {}
        
        ngOnInit() {
        let storageUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.user.username = storageUser.username;
        this.user.about = storageUser.about;
        this.user.image = storageUser.image;
        this.user.email = storageUser.email;
    }

  onSubmit() {
        this.userService.update(this.user)
        .subscribe( dbItem =>{
        this.user.email = dbItem.email;
        this.user.about = dbItem.about;
        this.user.image = dbItem.image
        this.router.navigate(['/profile']);
        }
        )
    }

}
