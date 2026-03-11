import { WorkPermit } from '../types';
import { mockWorkPermit } from '../mockData';

export async function getWorkPermit(): Promise<WorkPermit> {
  return mockWorkPermit;
}
