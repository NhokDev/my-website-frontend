import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ProjectCard } from '../projects/project-card';
import { portfolioProject } from '../projects/project-data';
import { OrbitalArt } from './orbital-art';

@Component({
    selector: 'app-home',
    imports: [RouterLink, OrbitalArt, ProjectCard, TranslocoPipe],
    templateUrl: './home.html',
    host: { class: 'block' },
})
export class Home {
    protected readonly project = portfolioProject;
}
