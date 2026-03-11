import { Recommendation } from '../types';
import { mockRecommendations } from '../mockData';

export async function getRecommendations(): Promise<Recommendation[]> {
  return mockRecommendations;
}
