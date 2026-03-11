import { Skill } from '../types';
import { mockSkills } from '../mockData';

export async function getSkills(): Promise<Skill[]> {
  return mockSkills;
}
