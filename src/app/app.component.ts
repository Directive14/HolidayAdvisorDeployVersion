import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { AuthenticationService, UserService } from './_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ]),
    trigger('routeAnimation', [
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(1000)
      ]),
      transition('* => void', animate(1000, style({ transform: 'translateX(100%)', opacity: 0 })))
    ])
  ]
})

export class AppComponent {
  isVisible: boolean = true;
  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private userService : UserService) { }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get currentUser() {
    return this.userService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}