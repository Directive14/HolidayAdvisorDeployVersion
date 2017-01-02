import { Component, Input, trigger, state, animate, transition, style } from '@angular/core';
import { Partner } from '../../_models';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService, UserService, PartnerService } from '../../_services';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-partner.component.html',
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', animate(300, style({transform: 'translateX(100%)', opacity: 0})))
    ])
  ]
})
export class CreatePartnerComponent {
    @Input() partner: Partner;


    constructor(
        private http: Http,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private partnerService: PartnerService
    ) {
        this.partner = {
            name: '',
            officeAddresses: '',
            webAddress: ''
        };
    }

    onSubmit() {
        this.partnerService.createPartner(this.partner)
            .subscribe(
            data => {
                this.alertService.success(`${this.partner.name} added successful to partners list`, true);
                this.router.navigate(['/']);
                this.alertService.clear(3000);
            },
            error => {
                this.alertService.error(error);
            });
    }
}
