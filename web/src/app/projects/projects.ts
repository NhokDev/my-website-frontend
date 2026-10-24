import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ProjectCard } from './project-card';
import { portfolioProject } from './project-data';

@Component({
    selector: 'app-projects',
    imports: [RouterLink, ProjectCard, TranslocoPipe],
    templateUrl: './projects.html',
})
export class Projects {
    protected readonly project = portfolioProject;
}
