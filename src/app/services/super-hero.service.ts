import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  constructor() {}

  public getSuperHeroes(): SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = 'Spider-Man';
    hero.alterEgo = 'Peter Parker';
    hero.publisher = 'Marvel Comics';
    hero.firstAppearence = 'Amazing Fantasy 15';
    hero.publishingYear = 1962;
    hero.createdBy = 'Stan Lee & Steve Ditko';

    // brackets means array.
    return [hero];
  }
}
