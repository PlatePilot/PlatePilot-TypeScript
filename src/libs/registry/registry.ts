export default class Registry {
  private _storage : Storage
  private _key: string;
  constructor(
    storage : Storage,
    key : string
  ) {
    this._storage = storage
    this._key = key
  }

  get storage() : Storage {
    return this._storage
  }

  get key() : string {
    return this._key
  }
}
