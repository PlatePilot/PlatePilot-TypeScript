import { Entry } from '../entry/entry.ts';

export interface Category {
  id : string,
  name : string,
  entries : Entry[]
}
