import { By, Meta, Title } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, TitleStrategy } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { LocalizedTitleStrategy } from './i18n/localized-title-strategy';
import { translocoTesting } from './i18n/testing';
import { PortfolioLayout } from './layout/portfolio-layout';

describe('Portfolio routes', () => {
    async function setup(url: string) {
        TestBed.configureTestingModule({
            imports: [App, translocoTesting()],
            providers: [
                provideRouter(routes),
                { provide: TitleStrategy, useClass: LocalizedTitleStrategy },
            ],
        });
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
        expect(element.querySelector('h1')?.textContent).toBe('Ideas into interfaces.');
        expect(TestBed.inject(Title).getTitle()).toBe('Projects · Aurora');
        expect(projectsLink.getAttribute('aria-current')).toBe('page');
        expect(element.querySelector('nav a[href="/"]')?.hasAttribute('aria-current')).toBe(false);
        expect(document.activeElement).toBe(main);
        expect(element.textContent).toContain('Responsive interfaces, thoughtful architecture');
        expect(element.querySelectorAll('article')).toHaveLength(1);
        expect(element.querySelector('article')?.textContent).toContain('In progress');
        expect(element.querySelectorAll('a[href^="http"], a[href="#"]')).toHaveLength(0);
    });

    it('resolves the home About fragment from another page and focuses its actual section', async () => {
        const { fixture, router, element } = await setup('/projects');
        element.querySelector<HTMLAnchorElement>('nav a[href="/#about"]')!.click();
        await fixture.whenStable();

        expect(router.url).toBe('/#about');
        expect(TestBed.inject(Title).getTitle()).toBe('Home · Aurora');
        expect(document.activeElement).toBe(element.querySelector('#about'));
        expect(element.querySelector('nav a[aria-current="page"]')?.textContent).toBe('Home');
    });

    it('restores two About panels and a real Next chapter CTA in both languages', async () => {
        const { fixture, element } = await setup('/');
        for (const [lang, aboutLabel, nextLabel, narrative, stack, cta] of [
            [
                'en',
                '02 / About',
                '03 / Next chapter',
                'Technology, design,',
                'Tools and technologies',
                'Explore my work',
            ],
            [
                'es',
                '02 / Acerca de',
                '03 / Próximo capítulo',
                'Tecnología, diseño,',
                'Herramientas y tecnologías',
                'Explorar mis proyectos',
            ],
        ]) {
            element.querySelector<HTMLButtonElement>(`header button[lang="${lang}"]`)!.click();
            await fixture.whenStable();
            const about = element.querySelector('#about');
            const next = element.querySelector('#next-chapter');
            expect(about, 'About must be a real section').not.toBeNull();
            expect(next, 'Next chapter must be a real section').not.toBeNull();
            for (const section of [about!, next!]) {
                expect(section.getAttribute('tabindex')).toBe('-1');
                const heading = element.querySelector(
                    `#${section.getAttribute('aria-labelledby')}`,
                );
                expect(heading?.tagName).toBe('H2');
                expect(heading?.textContent?.trim()).toBeTruthy();
            }
            expect(about!.querySelector('.eyebrow')?.textContent).toBe(aboutLabel);
            expect(about!.querySelectorAll('.glass')).toHaveLength(2);
            expect(about!.textContent).toContain(narrative);
            expect(about!.textContent).toContain(stack);
            expect(about!.querySelector('dl')?.textContent).toContain('Angular');
            expect(about!.querySelector('dl')?.textContent).toContain('TypeScript');
            expect(about!.querySelector('dl')?.textContent).toContain('Tailwind CSS');
            expect(next!.classList.contains('glass')).toBe(true);
            expect(next!.querySelector('.eyebrow')?.textContent).toBe(nextLabel);
            expect(next!.querySelector('a')?.getAttribute('href')).toBe('/projects');
            expect(next!.querySelector('a')?.textContent).toContain(cta);
            expect(about!.querySelector('#about-title br')).not.toBeNull();
            expect(about!.querySelector('.about-panel h3 br')).not.toBeNull();
            expect(about!.querySelector('.about-panel h3 .gradient-text')?.textContent).toBe(
                lang === 'en' ? 'and useful ideas.' : 'e ideas útiles.',
            );
            expect(next!.querySelector('h2 br')).not.toBeNull();
            expect(next!.querySelector('h2 .gradient-text')?.textContent).toBe(
                lang === 'en' ? 'worth remembering.' : 'que deje huella.',
            );
            expect(element.querySelector('dialog, a[href="/about"]')).toBeNull();
            expect(
                element.querySelector('#approach, a[href*="approach"], a[href^="mailto:"]'),
            ).toBeNull();
            expect(element.textContent).not.toContain('How I want to build');
            expect(element.textContent).not.toContain('Cómo quiero construir');
            expect(element.querySelector('.hero a[href="/#about"]')).not.toBeNull();
        }
    });

    it('focuses the closing target from the footer and returns from its projects CTA to About', async () => {
        const { fixture, router, element } = await setup('/');
        element.querySelector<HTMLAnchorElement>('footer a[href="/#next-chapter"]')!.click();
        await fixture.whenStable();
        expect(router.url).toBe('/#next-chapter');
        expect(document.activeElement).toBe(element.querySelector('#next-chapter'));
        element.querySelector<HTMLAnchorElement>('#next-chapter a')!.click();
        await fixture.whenStable();
        expect(router.url).toBe('/projects');
        expect(document.activeElement).toBe(element.querySelector('main'));
        element.querySelector<HTMLAnchorElement>('main a[href="/#about"]')!.click();
        await fixture.whenStable();
        expect(router.url).toBe('/#about');
        expect(document.activeElement).toBe(element.querySelector('#about'));
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
        expect(element.querySelector('h1')?.textContent).toContain('Building digital');
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

    it('offers native ES/EN buttons with full language names and decorative inline flags', async () => {
        const { element } = await setup('/');
        const group = element.querySelector('header [role="group"]');
        expect(group, 'the header needs a labeled language button group').not.toBeNull();
        expect(group!.getAttribute('aria-label')).toBe('Language');
        expect(element.querySelector('header select')).toBeNull();
        const buttons = Array.from(group!.querySelectorAll('button'));
        expect(buttons).toHaveLength(2);
        expect(buttons.map((button) => button.textContent?.trim())).toEqual(['ES', 'EN']);
        expect(buttons.map((button) => button.getAttribute('aria-label'))).toEqual([
            'Español',
            'English',
        ]);
        expect(buttons.map((button) => button.lang)).toEqual(['es', 'en']);
        expect(buttons.map((button) => button.getAttribute('aria-pressed'))).toEqual([
            'false',
            'true',
        ]);
        for (const button of buttons) {
            expect(button.type).toBe('button');
            expect(button.hasAttribute('role')).toBe(false);
            expect(button.tabIndex).toBe(0);
            const flag = button.querySelector('svg');
            expect(flag).not.toBeNull();
            expect(flag!.getAttribute('aria-hidden')).toBe('true');
            expect(flag!.getAttribute('focusable')).toBe('false');
            expect(flag!.querySelectorAll('image, use, title')).toHaveLength(0);
        }
    });

    it('switches the shared shell, pages, accessibility and metadata without changing routes', async () => {
        const { fixture, router, element } = await setup('/');
        const group = element.querySelector('header [role="group"]')!;
        const spanish = group.querySelector<HTMLButtonElement>('button[lang="es"]')!;
        const english = group.querySelector<HTMLButtonElement>('button[lang="en"]')!;

        spanish.click();
        await fixture.whenStable();
        expect(spanish.getAttribute('aria-pressed')).toBe('true');
        expect(english.getAttribute('aria-pressed')).toBe('false');
        expect(router.url).toBe('/');
        expect(document.documentElement.lang).toBe('es');
        expect(TestBed.inject(Title).getTitle()).toBe('Inicio · Aurora');
        expect(TestBed.inject(Meta).getTag('name="description"')?.content).toContain(
            'Interfaces cuidadas',
        );
        expect(element.querySelector('h1')?.textContent).toContain('Creando experiencias');
        expect(element.querySelector('nav')?.getAttribute('aria-label')).toBe(
            'Navegación principal',
        );
        expect(element.querySelector('.skip-link')?.textContent).toBe('Saltar al contenido');
        expect(element.querySelector('.brand')?.getAttribute('aria-label')).toBe(
            'Inicio de Aurora',
        );
        expect(element.querySelector('article ul')?.getAttribute('aria-label')).toBe('Tecnologías');
        expect(element.querySelector('article')?.textContent).toContain('En desarrollo');
        expect(element.querySelector('article')?.textContent).toContain('Portafolio Aurora');
        expect(element.querySelector('article')?.textContent).toContain('Este mismo sitio:');
        expect(element.querySelector('article')?.textContent).toContain('Siguiente paso:');
        expect(element.querySelector('article ul')?.textContent).toContain('Angular');
        expect(element.querySelector('#about')?.textContent).toContain('Tecnología, diseño,');
        expect(element.querySelector('footer')?.textContent).toContain('Próximo capítulo');
        expect(group.getAttribute('aria-label')).toBe('Idioma');

        await router.navigateByUrl('/projects');
        await fixture.whenStable();
        expect(spanish.getAttribute('aria-pressed')).toBe('true');
        expect(element.querySelector('header [role="group"]')).toBe(group);
        expect(element.querySelector('h1')?.textContent).toBe('De las ideas a las interfaces.');
        expect(TestBed.inject(Title).getTitle()).toBe('Proyectos · Aurora');
        expect(element.querySelector('nav a[aria-current="page"]')?.textContent).toBe('Proyectos');

        element.querySelector<HTMLAnchorElement>('nav a[href="/#about"]')!.click();
        await fixture.whenStable();
        expect(router.url).toBe('/#about');
        expect(TestBed.inject(Title).getTitle()).toBe('Inicio · Aurora');
        expect(document.activeElement).toBe(element.querySelector('#about'));

        await router.navigateByUrl('/unknown');
        await fixture.whenStable();
        expect(TestBed.inject(Title).getTitle()).toBe('Página no encontrada · Aurora');
        expect(element.querySelector('h1')?.textContent).toBe('Esta página no está en órbita.');

        english.click();
        await fixture.whenStable();
        expect(english.getAttribute('aria-pressed')).toBe('true');
        expect(spanish.getAttribute('aria-pressed')).toBe('false');
        expect(group.getAttribute('aria-label')).toBe('Language');
        expect(router.url).toBe('/unknown');
        expect(document.documentElement.lang).toBe('en');
        expect(TestBed.inject(Title).getTitle()).toBe('Page not found · Aurora');
        expect(element.querySelector('h1')?.textContent).toBe("This page isn't in orbit.");
        expect(TestBed.inject(Meta).getTag('name="description"')?.content).toContain(
            'Thoughtful interfaces',
        );
    });

    it('translates visible orbital annotations while keeping the artwork decorative', async () => {
        const { fixture, element } = await setup('/');
        const artwork = element.querySelector('app-orbital-art')!;
        const annotations = () =>
            Array.from(artwork.querySelectorAll('.annotation span, .annotation strong'), (node) =>
                node.textContent?.trim(),
            );
        expect(annotations()).toEqual([
            'Interface',
            'Design with purpose.',
            'Built with',
            'Angular · TypeScript',
        ]);
        element.querySelector<HTMLButtonElement>('header button[lang="es"]')!.click();
        await fixture.whenStable();
        expect(annotations()).toEqual([
            'Interfaz',
            'Diseño con propósito.',
            'Creado con',
            'Angular · TypeScript',
        ]);
        expect(artwork.getAttribute('aria-hidden')).toBe('true');
        element.querySelector<HTMLButtonElement>('header button[lang="en"]')!.click();
        await fixture.whenStable();
        expect(annotations()).toEqual([
            'Interface',
            'Design with purpose.',
            'Built with',
            'Angular · TypeScript',
        ]);
    });

    it('pauses and resumes decorative motion with a stable native toggle', async () => {
        const { fixture, element } = await setup('/');
        const frame = element.querySelector('.site-frame')!;
        const toggle = element.querySelector<HTMLButtonElement>('footer button');
        expect(toggle, 'ongoing motion needs a keyboard-accessible pause control').not.toBeNull();
        expect(toggle!.type).toBe('button');
        expect(toggle!.tabIndex).toBe(0);
        expect(toggle!.textContent?.trim()).toBe('Pause animations');
        expect(toggle!.getAttribute('aria-pressed')).toBe('false');
        expect(frame.getAttribute('data-motion')).toBe('running');

        toggle!.click();
        await fixture.whenStable();
        expect(toggle!.getAttribute('aria-pressed')).toBe('true');
        expect(toggle!.textContent?.trim()).toBe('Pause animations');
        expect(frame.getAttribute('data-motion')).toBe('paused');

        toggle!.click();
        await fixture.whenStable();
        expect(toggle!.getAttribute('aria-pressed')).toBe('false');
        expect(frame.getAttribute('data-motion')).toBe('running');
        const ambient = element.querySelector('.ambient')!;
        expect(ambient.getAttribute('aria-hidden')).toBe('true');
        expect(ambient.querySelectorAll('a, button, [tabindex]')).toHaveLength(0);
    });

    it('preserves pause across routes and language changes without changing its toggle meaning', async () => {
        const { fixture, router, element } = await setup('/');
        const toggle = element.querySelector<HTMLButtonElement>('footer button');
        expect(toggle).not.toBeNull();
        toggle!.click();
        await fixture.whenStable();
        element.querySelector<HTMLButtonElement>('header button[lang="es"]')!.click();
        await fixture.whenStable();
        expect(toggle!.textContent?.trim()).toBe('Pausar animaciones');
        expect(toggle!.getAttribute('aria-pressed')).toBe('true');

        for (const url of ['/projects', '/unknown', '/']) {
            await router.navigateByUrl(url);
            await fixture.whenStable();
            expect(element.querySelector('footer button')).toBe(toggle);
            expect(element.querySelector('.site-frame')?.getAttribute('data-motion')).toBe(
                'paused',
            );
        }

        element.querySelector<HTMLButtonElement>('header button[lang="en"]')!.click();
        await fixture.whenStable();
        expect(toggle!.textContent?.trim()).toBe('Pause animations');
        expect(toggle!.getAttribute('aria-pressed')).toBe('true');
        toggle!.click();
        await fixture.whenStable();
        expect(element.querySelector('.site-frame')?.getAttribute('data-motion')).toBe('running');
    });

    it('ignores unsupported language values in the language handler', async () => {
        const { fixture, element } = await setup('/');
        const layout = fixture.debugElement.query(By.directive(PortfolioLayout))
            .componentInstance as PortfolioLayout;
        layout['changeLanguage']('fr');
        await fixture.whenStable();
        expect(document.documentElement.lang).toBe('en');
        expect(TestBed.inject(Title).getTitle()).toBe('Home · Aurora');
        expect(element.querySelector('h1')?.textContent).toContain('Building digital');
    });
});
