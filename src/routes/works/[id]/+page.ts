import { error } from '@sveltejs/kit';
import { works } from '../../../data';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
  return works.map((work) => ({ id: work.id.toString() }));
};

export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const workIndex = works.findIndex((w) => w.id === Number(params.id));
  const work = works[workIndex];
  if (!work) {
    error(404);
  }

  let nextWorkIndex = workIndex + 1;
  if (nextWorkIndex === works.length) {
    nextWorkIndex = 0;
  }

  const nextWork = works[nextWorkIndex];

  return { work, nextWork };
};
