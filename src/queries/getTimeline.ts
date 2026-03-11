import { TimelineItem } from '../types';
import { mockTimeline } from '../mockData';

export async function getTimeline(): Promise<TimelineItem[]> {
  return mockTimeline;
}
