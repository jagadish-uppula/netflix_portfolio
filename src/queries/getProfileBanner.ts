import { ProfileBanner } from '../types';
import { mockProfileBanner } from '../mockData';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return mockProfileBanner;
}
