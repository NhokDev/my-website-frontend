import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [provideRouter(routes)],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('renders the learning home inside an accessible navigation shell', async () => {
        const fixture = TestBed.createComponent(App);
        await TestBed.inject(Router).navigateByUrl('/');
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('header nav')?.getAttribute('aria-label')).toBe(
            'Main navigation',
        );
        expect(compiled.querySelector('h1')?.textContent).toContain('Learning by building');
        expect(compiled.querySelectorAll('h1')).toHaveLength(1);
        expect(compiled.querySelector('a.skip-link')?.getAttribute('href')).toBe('#main-content');
        expect(compiled.querySelector('main#main-content')?.getAttribute('tabindex')).toBe('-1');
        expect(compiled.querySelector('footer')).not.toBeNull();
        expect(compiled.textContent).toContain('In progress');
    });
});
