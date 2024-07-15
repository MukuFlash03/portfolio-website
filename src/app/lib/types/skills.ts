export type Skill = {
    name: string;
    logo: string;
};

export type SkillCategory = {
    category: string;
    skills: Skill[];
};
