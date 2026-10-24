import { TranslocoTestingModule } from '@jsverse/transloco';
import en from '../../../public/i18n/en.json';
import es from '../../../public/i18n/es.json';

export function translocoTesting() {
    return TranslocoTestingModule.forRoot({
        langs: { en, es },
        translocoConfig: {
            availableLangs: ['en', 'es'],
            defaultLang: 'en',
            fallbackLang: 'en',
            reRenderOnLangChange: true,
        },
        preloadLangs: true,
    });
}
