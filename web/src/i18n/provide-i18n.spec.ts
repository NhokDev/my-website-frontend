import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { isDevMode } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter, Router, TitleStrategy } from '@angular/router';
import { TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TranslocoService } from '@jsverse/transloco';
import en from '../../public/i18n/en.json';
import es from '../../public/i18n/es.json';
import { LocalizedTitleStrategy } from '../app/i18n/localized-title-strategy';
import { TranslocoHttpLoader } from '../app/i18n/transloco-loader';
import { provideI18n } from './provide-i18n';

describe('provideI18n', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideRouter([]),
                provideHttpClient(),
                provideI18n(),
                provideHttpClientTesting(),
            ],
        });
    });

    afterEach(() => TestBed.inject(HttpTestingController).verify());

    it('preserves the language configuration and registers the HTTP loader', () => {
        expect(TestBed.inject(TRANSLOCO_CONFIG)).toMatchObject({
            availableLangs: ['en', 'es'],
            defaultLang: 'en',
            fallbackLang: 'en',
            reRenderOnLangChange: true,
            prodMode: !isDevMode(),
        });
        expect(TestBed.inject(TranslocoService).getActiveLang()).toBe('en');
        expect(TestBed.inject(TRANSLOCO_LOADER)).toBeInstanceOf(TranslocoHttpLoader);
    });

    it('provides a title strategy that loads catalogs and reacts to language changes', () => {
        const strategy = TestBed.inject(TitleStrategy);
        const http = TestBed.inject(HttpTestingController);
        const title = TestBed.inject(Title);
        expect(strategy).toBeInstanceOf(LocalizedTitleStrategy);

        strategy.updateTitle(TestBed.inject(Router).routerState.snapshot);
        const englishRequest = http.expectOne('i18n/en.json');
        expect(englishRequest.request.method).toBe('GET');
        englishRequest.flush(en);
        expect(title.getTitle()).toBe(en.metadata.titles.home);

        TestBed.inject(TranslocoService).setActiveLang('es');
        expect(title.getTitle()).toBe(en.metadata.titles.home);
        http.expectOne('i18n/es.json').flush(es);
        expect(title.getTitle()).toBe(es.metadata.titles.home);
    });
});
