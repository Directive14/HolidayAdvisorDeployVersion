import { Component, trigger, transition, animate, state, style } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService} from '../../_services';

@Component({
    templateUrl: './register.component.html',
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate(2000)
      ]),
      transition('* => void', animate(2000, style({transform: 'translateY(100%)', opacity: 0})))
    ])
  ]
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                    this.alertService.clear(3000);
                },
                error => {
                    this.alertService.error(`Username ${this.model.username} already exist`, false);
                    this.loading = false;
                    this.alertService.clear(3000);
                });
    }
}
