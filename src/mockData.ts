import { Project, ProfileBanner, WorkPermit, TimelineItem, Certification, ContactMe, Skill, Recommendation, Blog, MusicItem, Book } from './types';

export const mockProfileBanner: ProfileBanner = {
  backgroundImage: { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000' },
  headline: 'Enter Your Headline Here',
  resumeLink: { url: '#' },
  linkedinLink: 'https://linkedin.com',
  profileSummary: 'Enter your professional summary here. This is a placeholder for your career highlights and aspirations.',
};

export const mockWorkPermit: WorkPermit = {
  visaStatus: 'Enter Visa Status',
  expiryDate: new Date('2030-12-31'),
  summary: 'Enter work permit summary here.',
  additionalInfo: 'Enter additional work permit information here.',
};

export const mockTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Company Name 1',
    title: 'Work Experience 1',
    techStack: 'Tech Stack 1, Tech Stack 2',
    summaryPoints: ['Responsibility 1', 'Achievement 1', 'Project 1 description'],
    dateRange: 'Year - Year',
  },
  {
    timelineType: 'work',
    name: 'Company Name 2',
    title: 'Work Experience 2',
    techStack: 'Tech Stack 3, Tech Stack 4',
    summaryPoints: ['Responsibility 2', 'Achievement 2', 'Project 2 description'],
    dateRange: 'Year - Year',
  },
  {
    timelineType: 'education',
    name: 'University Name 1',
    title: 'Education 1',
    techStack: 'Major/Minor',
    summaryPoints: ['Academic Achievement 1', 'GPA: X.X/4.0', 'Relevant Coursework'],
    dateRange: 'Year - Year',
  },
  {
    timelineType: 'education',
    name: 'University Name 2',
    title: 'Education 2',
    techStack: 'Major/Minor',
    summaryPoints: ['Academic Achievement 2', 'Relevant Club/Activity'],
    dateRange: 'Year - Year',
  },
];

export const mockProjects: Project[] = [
  {
    title: 'Project 1',
    description: 'Enter project 1 description here. Explain what the project is about and what problem it solves.',
    techUsed: 'React, TypeScript, CSS',
    image: { url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800' },
  },
  {
    title: 'Project 2',
    description: 'Enter project 2 description here. Highlight key features and your role in the development.',
    techUsed: 'Node.js, Express, MongoDB',
    image: { url: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800' },
  },
  {
    title: 'Project 3',
    description: 'Enter project 3 description here. Talk about the technologies used and the outcome.',
    techUsed: 'Next.js, Tailwind CSS',
    image: { url: 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=800' },
  },
];

export const mockCertifications: Certification[] = [
  {
    title: 'Certification 1',
    issuer: 'Issuing Organization 1',
    issuedDate: 'Year-Month-Day',
    link: '#',
    iconName: 'FaCertificate',
  },
  {
    title: 'Certification 2',
    issuer: 'Issuing Organization 2',
    issuedDate: 'Year-Month-Day',
    link: '#',
    iconName: 'FaCertificate',
  },
];

export const mockContactMe: ContactMe = {
  profilePicture: { url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400' },
  name: 'Enter Your Name',
  title: 'Enter Your Professional Title',
  summary: 'Enter a short summary for your contact section.',
  companyUniversity: 'Current Company or University',
  linkedinLink: 'https://linkedin.com/in/yourprofile',
  email: 'your.email@example.com',
  phoneNumber: '+1 000 000 0000',
};

export const mockSkills: Skill[] = [
  {
    name: 'Skill 1',
    category: 'Frontend',
    description: 'Description of your proficiency in Skill 1.',
    icon: 'FaReact',
  },
  {
    name: 'Skill 2',
    category: 'Backend',
    description: 'Description of your proficiency in Skill 2.',
    icon: 'FaNodeJs',
  },
  {
    name: 'Skill 3',
    category: 'Languages',
    description: 'Description of your proficiency in Skill 3.',
    icon: 'SiTypescript',
  },
];

export const mockRecommendations: Recommendation[] = [
  {
    name: 'Recommender Name 1',
    title: 'Position at Company',
    date: 'Month Day, Year',
    text: ['Enter recommendation text here. This is a placeholder for a testimonial from a colleague or manager.'],
    image: 'https://picsum.photos/seed/rec1/100/100',
  },
];

export const mockBlogs: Blog[] = [
  {
    title: 'Blog Post Title 1',
    date: 'Month Day, Year',
    summary: 'Enter a short summary of your blog post here.',
    link: '#',
    image: 'https://picsum.photos/seed/blog1/400/200',
  },
];

export const mockMusic: MusicItem[] = [
  {
    title: 'Song/Album Title 1',
    artist: 'Artist Name 1',
    image: 'https://picsum.photos/seed/music1/200/200',
  },
];

export const mockReading: Book[] = [
  {
    title: 'Book Title 1',
    author: 'Author Name 1',
    image: 'https://picsum.photos/seed/book1/200/300',
  },
];
