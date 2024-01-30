import setAll from './set_all.ts';

/**
 * This function clears all categories in the list of categories.
 * 
 * @param storage The storage object
 * @param key The storage key
 */
export default function clear(
  storage : Storage,
  key : string
) : void {
  setAll(storage, key, []);
}
