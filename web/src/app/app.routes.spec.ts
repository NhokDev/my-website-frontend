import { Title } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('Portfolio routes', () => {
    async function setup(url: string) {
        TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] });
        const fixture = TestBed.createComponent(App);
        const router = TestBed.inject(Router);
        fixture.detectChanges();
        await router.navigateByUrl(url);
        await fixture.whenStable();
        const element = fixture.nativeElement as HTMLElement;
        return { fixture, router, element };
    }

    it('navigates to the workbench with a persistent shell, title, current link and route focus', async () => {
        const { fixture, router, element } = await setup('/');
        const header = element.querySelector('header');
        const main = element.querySelector('main');
        const projectsLink = element.querySelector<HTMLAnchorElement>('nav a[href="/projects"]')!;
        projectsLink.click();
        await fixture.whenStable();

        expect(router.url).toBe('/projects');
        expect(element.querySelector('header')).toBe(header);
        expect(element.querySelector('main')).toBe(main);
        expect(element.querySelectorAll('h1')).toHaveLength(1);
        expect(element.querySelector('h1')?.textContent).toBe('Small steps. Real learning.');
        expect(TestBed.inject(Title).getTitle()).toBe('Projects · Aurora');
        expect(projectsLink.getAttribute('aria-current')).toBe('page');
        expect(element.querySelector('nav a[href="/"]')?.hasAttribute('aria-current')).toBe(false);
        expect(document.activeElement).toBe(main);
        expect(element.textContent).toContain('No public demos yet.');
        expect(element.querySelectorAll('article')).toHaveLength(1);
        expect(element.querySelector('article')?.textContent).toContain('In progress');
        expect(element.querySelectorAll('a[href^="http"], a[href="#"]')).toHaveLength(0);
    });

    it('resolves the home approach fragment from another page and focuses its actual section', async () => {
        const { fixture, router, element } = await setup('/projects');
        element.querySelector<HTMLAnchorElement>('nav a[href="/#approach"]')!.click();
        await fixture.whenStable();

        expect(router.url).toBe('/#approach');
        expect(TestBed.inject(Title).getTitle()).toBe('Home · Aurora');
        expect(document.activeElement).toBe(element.querySelector('#approach'));
        expect(element.querySelector('nav a[aria-current="page"]')?.textContent).toBe('Home');
    });

    it('falls back to main focus when a route fragment does not exist', async () => {
        const { fixture, router, element } = await setup('/');
        await router.navigateByUrl('/projects#missing-section');
        await fixture.whenStable();

        expect(router.url).toBe('/projects#missing-section');
        expect(document.activeElement).toBe(element.querySelector('main'));
    });

    it('renders a titled not-found route with a working return-home link', async () => {
        const { fixture, router, element } = await setup('/unknown/deep-link');
        expect(TestBed.inject(Title).getTitle()).toBe('Page not found · Aurora');
        expect(element.querySelectorAll('h1')).toHaveLength(1);
        expect(element.querySelector('h1')?.textContent).toBe("This page isn't in orbit.");
        expect(element.querySelector('nav [aria-current]')).toBeNull();

        element.querySelector<HTMLAnchorElement>('main a[href="/"]')!.click();
        await fixture.whenStable();
        expect(router.url).toBe('/');
        expect(TestBed.inject(Title).getTitle()).toBe('Home · Aurora');
        expect(element.querySelector('h1')?.textContent).toContain('Learning by building');
        expect(document.activeElement).toBe(element.querySelector('main'));
    });

    it('keeps the skip link first and all decoration outside the accessibility tree', async () => {
        const { element } = await setup('/');
        const skipLink = element.querySelector<HTMLAnchorElement>('a')!;
        expect(skipLink.classList.contains('skip-link')).toBe(true);
        expect(skipLink.hash).toBe('#main-content');
        expect(element.querySelector('#main-content')?.getAttribute('tabindex')).toBe('-1');
        expect(element.querySelector('app-orbital-art')?.getAttribute('aria-hidden')).toBe('true');
        expect(element.querySelector('app-orbital-art a, app-orbital-art button')).toBeNull();
        expect(element.querySelectorAll('header, main, footer')).toHaveLength(3);
        expect(element.querySelectorAll('article')).toHaveLength(1);
    });
});
