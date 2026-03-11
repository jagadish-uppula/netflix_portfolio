import { Certification } from '../types';
import { mockCertifications } from '../mockData';

export async function getCertifications(): Promise<Certification[]> {
  return mockCertifications;
}
