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
                title: 'Home · Aurora',
                loadComponent: () => import('./home/home').then((m) => m.Home),
            },
            {
                path: 'projects',
                title: 'Projects · Aurora',
                loadComponent: () => import('./projects/projects').then((m) => m.Projects),
            },
            {
                path: '**',
                title: 'Page not found · Aurora',
                loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
            },
        ],
    },
];
