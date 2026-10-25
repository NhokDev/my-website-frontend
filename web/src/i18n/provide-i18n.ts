import { EnvironmentProviders, isDevMode, makeEnvironmentProviders } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { LocalizedTitleStrategy } from '../app/i18n/localized-title-strategy';
import { TranslocoHttpLoader } from '../app/i18n/transloco-loader';

export function provideI18n(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideTransloco({
            config: {
                availableLangs: ['en', 'es'],
                defaultLang: 'en',
                fallbackLang: 'en',
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader,
        }),
        { provide: TitleStrategy, useClass: LocalizedTitleStrategy },
    ]);
}
