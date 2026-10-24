export interface Project {
    readonly title: string;
    readonly status: 'In progress';
    readonly description: string;
    readonly technologies: readonly string[];
    readonly nextStep: string;
}

export const portfolioProject: Project = {
    title: 'Aurora portfolio',
    status: 'In progress',
    description:
        'This very site: a learning project in turning an idea into a clear, accessible interface.',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    nextStep: 'Next: grow the content as real projects take shape.',
};
