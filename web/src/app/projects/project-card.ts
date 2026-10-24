import { Component, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Project } from './project-data';

@Component({
    selector: 'app-project-card',
    imports: [TranslocoPipe],
    templateUrl: './project-card.html',
})
export class ProjectCard {
    readonly project = input.required<Project>();
}
