import { Component, input } from '@angular/core';
import { Project } from './project-data';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.html',
})
export class ProjectCard {
    readonly project = input.required<Project>();
}
