export interface Project {
    readonly titleKey: `project.${string}.title`;
    readonly statusKey: 'project.status.inProgress';
    readonly descriptionKey: `project.${string}.description`;
    readonly technologies: readonly string[];
    readonly nextStepKey: `project.${string}.nextStep`;
}

export const portfolioProject: Project = {
    titleKey: 'project.portfolio.title',
    statusKey: 'project.status.inProgress',
    descriptionKey: 'project.portfolio.description',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    nextStepKey: 'project.portfolio.nextStep',
};
