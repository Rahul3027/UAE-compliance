import { moduleBySlug } from '@/data/modules';

export function getModule(slug: string) {
  const module = moduleBySlug[slug as keyof typeof moduleBySlug];
  if (!module) {
    throw new Error(`Unknown module slug: ${slug}`);
  }
  return module;
}
