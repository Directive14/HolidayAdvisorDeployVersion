import { Component, Input, trigger, state, style, animate, transition} from '@angular/core';
import { User } from '../../_models';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserService} from '../../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
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
export class UpdateProfileComponent{
  @Input() user: User = new User;

  constructor( private http: Http,
        private router: Router,
        private userService: UserService) {}
        
        ngOnInit() {
        let storageUser = this.userService.getCurrentUser();
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
