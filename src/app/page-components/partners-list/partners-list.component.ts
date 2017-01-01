import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Partner } from '../../_models';
import { PartnerService } from '../../_services';


@Component({
    templateUrl: './partners-list.component.html'
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