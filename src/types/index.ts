export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
  }
  
  export interface Skill {
    title: string;
    icon: JSX.Element;
    skills: string[];
  }
  
  export interface FormData {
    name: string;
    email: string;
    message: string;
  }