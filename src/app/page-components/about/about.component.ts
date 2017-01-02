import { Component, transition, trigger, state, style, animate } from '@angular/core';

@Component({
    templateUrl: './about.component.html',
    host: {
     '[@routeAnimation]': 'true',
     '[style.position]': "'absolute'"
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
export class AboutComponent {
    developers: any[] = [
        {
            name: 'Iliyan Gogov',
            git: 'https://github.com/iliangogov',
            academy: 'https://telerikacademy.com/Users/Iliangogov'
        },
        {
            name: 'Desislava Ivanova',
            git: 'https://github.com/de3ka',
            academy: 'https://telerikacademy.com/Users/derketo'
        },
        {
            name: 'Toni Nikolov',
            git: 'https://github.com/TonyNikolov',
            academy: 'https://telerikacademy.com/Users/Tony_Nikolov'
        },
    ]
}