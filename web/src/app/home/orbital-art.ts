import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
    selector: 'app-orbital-art',
    imports: [TranslocoPipe],
    host: { 'aria-hidden': 'true', class: 'pointer-events-none block min-w-0' },
    templateUrl: './orbital-art.html',
})
export class OrbitalArt {}
