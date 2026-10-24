import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, inject, Injector } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
    selector: 'app-portfolio-layout',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslocoPipe],
    templateUrl: './portfolio-layout.html',
    host: { class: 'block' },
})
export class PortfolioLayout {
    protected readonly transloco = inject(TranslocoService);

    private readonly router = inject(Router);
    private readonly document = inject(DOCUMENT);
    private readonly injector = inject(Injector);

    constructor() {
        this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
            if (!(event instanceof NavigationEnd)) return;

            // Render first so lazy pages and fragment targets exist. No browser work during SSR.
            afterNextRender(
                () => {
                    const fragment = this.router.parseUrl(event.urlAfterRedirects).fragment;
                    const target =
                        (fragment ? this.document.getElementById(fragment) : null) ??
                        this.document.getElementById('main-content');
                    if (event.id > 1 || fragment) {
                        target?.focus({ preventScroll: true });
                        target?.scrollIntoView?.({ block: 'start' });
                    }
                },
                { injector: this.injector },
            );
        });
    }

    protected changeLanguage(lang: string): void {
        if (lang === 'en' || lang === 'es') this.transloco.setActiveLang(lang);
    }
}
