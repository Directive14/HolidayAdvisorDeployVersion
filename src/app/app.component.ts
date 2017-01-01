import { Component, trigger, state, style,transition, animate, keyframes } from '@angular/core';
import {AuthenticationService} from './_services/index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('movePanel',[
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(300)
      ])
    ])
  ]
})

export class AppComponent {
  isVisible: boolean = true;
  constructor(private authService: AuthenticationService, private router: Router) {}

  get isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
