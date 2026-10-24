import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import en from '../../../public/i18n/en.json';
import es from '../../../public/i18n/es.json';
import { App } from '../app';
import { appConfig } from '../app.config';

describe('HTTP catalog loading and localized metadata', () => {
    async function setup() {
        TestBed.configureTestingModule({
            imports: [App],
            providers: [...appConfig.providers, provideHttpClientTesting()],
        });
        const fixture = TestBed.createComponent(App);
        const router = TestBed.inject(Router);
        const http = TestBed.inject(HttpTestingController);
        fixture.detectChanges();
        await router.navigateByUrl('/');
        fixture.detectChanges();
        const request = http.expectOne('i18n/en.json');
        expect(request.request.method).toBe('GET');
        request.flush(en);
        await fixture.whenStable();
        return { fixture, router, http, transloco: TestBed.inject(TranslocoService) };
    }

    afterEach(() => TestBed.inject(HttpTestingController).verify());

    it('waits for the JSON catalog and uses the latest route when a language finishes loading', async () => {
        const { fixture, router, http, transloco } = await setup();
        expect(document.documentElement.lang).toBe('en');
        expect(TestBed.inject(Title).getTitle()).toBe('Home · Aurora');
        transloco.setActiveLang('es');
        await router.navigateByUrl('/projects');
        fixture.detectChanges();
        expect(document.documentElement.lang).toBe('en');
        expect(TestBed.inject(Title).getTitle()).toBe('Projects · Aurora');
        http.expectOne('i18n/es.json').flush(es);
        await fixture.whenStable();
        expect(document.documentElement.lang).toBe('es');
        expect(TestBed.inject(Title).getTitle()).toBe('Proyectos · Aurora');
        expect(TestBed.inject(Meta).getTag('name="description"')?.content).toBe(
            es.metadata.description,
        );
        expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toBe(
            es.projects.title,
        );
    });

    it('does not let a late Spanish response overwrite a switch back to English', async () => {
        const { fixture, http, transloco } = await setup();
        transloco.setActiveLang('es');
        fixture.detectChanges();
        const spanishRequest = http.expectOne('i18n/es.json');
        transloco.setActiveLang('en');
        spanishRequest.flush(es);
        await fixture.whenStable();
        expect(document.documentElement.lang).toBe('en');
        expect(TestBed.inject(Title).getTitle()).toBe('Home · Aurora');
        expect(TestBed.inject(Meta).getTag('name="description"')?.content).toBe(
            en.metadata.description,
        );
        expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain(
            en.home.headline,
        );
    });
});
