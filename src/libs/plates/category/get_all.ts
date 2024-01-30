import { Category } from './category.ts';

/**
 * This function gets all categories in the list of categories.
 * 
 * @param storage The storage object
 * @param key The storage key
 * @param categories The list of categories to set in the list
 * @returns The list of all categories
 */
export default function getAll(
  storage : Storage,
  key : string
) : Category[] {
  return JSON.parse(storage.getItem(key) || '[]') as Category[]
}
