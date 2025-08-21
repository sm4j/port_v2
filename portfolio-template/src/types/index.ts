export interface Project {
    title: string;
    description: string;
    link: string;
}

export interface Education {
    degree: string;
    major: string;
    minors: string[];
    institution: string;
    graduationYear: number;
}

export interface User {
    name: string;
    bio: string;
    image: string;
    email: string;
    projects: Project[];
    education: Education[];
}