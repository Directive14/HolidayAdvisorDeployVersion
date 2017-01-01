import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';

@Component({
    selector: 'app-googlemap',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.css'],
    animations: [
        trigger('showmsg', [
      state('show', style({opacity: '1', height: '*'})),
      state('hide', style({opacity: '0', height: '0px'})),
      transition('show <=> hide', [
        animate(1000)
      ])
    ])
    ]
})

export class GoogleMapComponent {
    @Input() lat: number;
    @Input() lng: number;
    state: string= 'hide';

    togglestates() {
    this.state = (this.state === 'hide' ? 'show' : 'hide');
    }
}
