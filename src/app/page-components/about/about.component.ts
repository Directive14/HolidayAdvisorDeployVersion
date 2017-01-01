import { Component } from '@angular/core';

@Component({
    templateUrl: './about.component.html'
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