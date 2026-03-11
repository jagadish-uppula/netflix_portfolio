import { ContactMe } from '../types';
import { mockContactMe } from '../mockData';

export async function getContactMe(): Promise<ContactMe> {
  return mockContactMe;
}
