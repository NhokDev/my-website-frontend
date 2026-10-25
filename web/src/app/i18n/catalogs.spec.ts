import en from '../../../public/i18n/en.json';
import es from '../../../public/i18n/es.json';
import { portfolioProject } from '../projects/project-data';

function catalogLeaves(value: unknown, prefix = ''): Record<string, string> {
    if (typeof value === 'string') {
        expect(value.trim(), `${prefix} must not be empty`).not.toBe('');
        return { [prefix]: value };
    }
    expect(value, `${prefix} must be an object or a string`).toBeTypeOf('object');
    expect(value).not.toBeNull();
    expect(Array.isArray(value)).toBe(false);
    return Object.fromEntries(
        Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
            Object.entries(catalogLeaves(child, prefix ? `${prefix}.${key}` : key)),
        ),
    );
}

describe('Translation catalogs', () => {
    it('has identical nonempty string keys in both shipped JSON catalogs', () => {
        const english = catalogLeaves(en);
        const spanish = catalogLeaves(es);
        expect(Object.keys(english).length).toBeGreaterThan(0);
        expect(Object.keys(spanish).sort()).toEqual(Object.keys(english).sort());
        for (const key of [
            portfolioProject.titleKey,
            portfolioProject.descriptionKey,
            portfolioProject.statusKey,
            portfolioProject.nextStepKey,
            'home.about.eyebrow',
            'home.about.title',
            'home.about.titleEnd',
            'home.about.description',
            'home.about.narrativeTitle',
            'home.about.narrativeAccent',
            'home.about.narrative',
            'home.about.details',
            'home.about.toolsTitle',
            'home.about.interface',
            'home.about.language',
            'home.about.styling',
            'home.about.localization',
            'home.next.eyebrow',
            'home.next.title',
            'home.next.titleAccent',
            'home.next.description',
            'home.next.cta',
            'shell.about',
            'home.aboutLink',
            'projects.aboutLink',
        ]) {
            expect(english[key]).toBeTruthy();
            expect(spanish[key]).toBeTruthy();
        }
        expect(portfolioProject.technologies).toEqual(['Angular', 'TypeScript', 'Tailwind CSS']);
        expect(Object.keys(english).some((key) => /approach/i.test(key))).toBe(false);
    });

    it('keeps private learning context and invented demo credentials out of public copy', () => {
        for (const catalog of [en, es]) {
            for (const [key, value] of Object.entries(catalogLeaves(catalog))) {
                expect(value, key).not.toMatch(
                    /learn|practi[cs]|aprend|práctic|practicar|no public demos|aún no hay demos|not a record|no un historial|sample copy|placeholder|alex\.dev|hello@example|Three\.js|Azure|\bJava\b/i,
                );
                expect(value, key).not.toMatch(/<[^>]+>/);
            }
        }
    });
});
