import { MusicItem } from '../types';
import { mockMusic } from '../mockData';

export async function getMusic(): Promise<MusicItem[]> {
  return mockMusic;
}
