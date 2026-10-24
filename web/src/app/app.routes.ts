import { Routes } from '@angular/router';
import { PortfolioLayout } from './layout/portfolio-layout';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioLayout,
        children: [
            {
                path: '',
                pathMatch: 'full',
                title: 'metadata.titles.home',
                loadComponent: () => import('./home/home').then((m) => m.Home),
            },
            {
                path: 'projects',
                title: 'metadata.titles.projects',
                loadComponent: () => import('./projects/projects').then((m) => m.Projects),
            },
            {
                path: '**',
                title: 'metadata.titles.notFound',
                loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
            },
        ],
    },
];
