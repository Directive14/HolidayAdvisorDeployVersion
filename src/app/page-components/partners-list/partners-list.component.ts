import { Component, OnInit, Input, trigger, state, transition, style, animate } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Partner } from '../../_models';
import { PartnerService } from '../../_services';


@Component({
    templateUrl: './partners-list.component.html',
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
export class PartnerListComponent implements OnInit {
    @Input() partners: Partner[];
    constructor(
        private http: Http,
        private partnerService: PartnerService
    ) {
        this.partners = [];
    }
    ngOnInit() {
        this.partnerService.getAll()
            .subscribe(partnersJson => this.partners.push(...partnersJson));
    }
}