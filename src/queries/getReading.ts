import { Book } from '../types';
import { mockReading } from '../mockData';

export async function getReading(): Promise<Book[]> {
  return mockReading;
}
