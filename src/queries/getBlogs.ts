import { Blog } from '../types';
import { mockBlogs } from '../mockData';

export async function getBlogs(): Promise<Blog[]> {
  return mockBlogs;
}
