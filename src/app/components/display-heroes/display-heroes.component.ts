import { Component } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-display-heroes',
  templateUrl: './display-heroes.component.html',
  styleUrl: './display-heroes.component.css',
})
export class DisplayHeroesComponent {
  // empty array
  heroes: SuperHero[] = [];

  constructor(
    private superHeroService: SuperHeroService,
    private shareDataService: ShareDataService
  ) {}

  ngOnInit(): void {
    this.superHeroService.getSuperHeroes().subscribe((result: SuperHero[]) => {
      this.heroes = result;
      console.log(this.heroes);
    });
  }

  deleteHero(hero: SuperHero, index: any) {
    console.log(hero);
    this.superHeroService.deleteHero(hero).subscribe((response) => {
      console.log(response);
      this.heroes.splice(index, 1);
    });
  }

  // sende hero über share-data.service nach edit-hero
  sendData(hero: SuperHero) {
    this.shareDataService.changeData(hero, '/edit-hero');
  }
}
