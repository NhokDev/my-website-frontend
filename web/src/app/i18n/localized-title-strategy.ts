import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { combineLatest, map, ReplaySubject } from 'rxjs';

@Injectable()
export class LocalizedTitleStrategy extends TitleStrategy {
    private readonly transloco = inject(TranslocoService);
    private readonly title = inject(Title);
    private readonly meta = inject(Meta);
    private readonly document = inject(DOCUMENT);
    private readonly titleKey = new ReplaySubject<string>(1);

    constructor() {
        super();
        const loadedLocale = this.transloco.selectTranslation().pipe(
            map((translations) => ({
                lang: this.transloco.getActiveLang(),
                translations,
            })),
        );
        combineLatest([this.titleKey, loadedLocale])
            .pipe(takeUntilDestroyed())
            .subscribe(([key, { lang, translations }]) => {
                // Capture the loaded catalog, not a possibly still-loading active language.
                this.title.setTitle(translations[key]);
                this.document.documentElement.lang = lang;
                this.meta.updateTag({
                    name: 'description',
                    content: translations['metadata.description'],
                });
            });
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
        this.titleKey.next(this.buildTitle(snapshot) ?? 'metadata.titles.home');
    }
}
