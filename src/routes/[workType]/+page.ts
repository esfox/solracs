import { error } from '@sveltejs/kit';
import { workTypes } from '../../data';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
  return Object.values(workTypes).map((type) => ({ workType: type.slug }));
};

export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const workTypeKey = params.workType as keyof typeof workTypes;
  const workType = workTypes[workTypeKey];
  if (!workType) {
    error(404);
  }

  return { workType };
};
