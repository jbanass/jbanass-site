export class Project {
    name: string;
    subtitle: string;
    descriptions: Array<string>;
    githubLink: string;

    constructor(name: string, subtitle: string, descriptions: Array<string>, githubLink?: string) {
        this.name = name;
        this.subtitle = subtitle;
        this.descriptions = descriptions;
        this.githubLink = githubLink;
    }
}