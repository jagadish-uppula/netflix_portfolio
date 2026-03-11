import { Project } from '../types';
import { mockProjects } from '../mockData';

export async function getProjects(): Promise<Project[]> {
  return mockProjects;
}
