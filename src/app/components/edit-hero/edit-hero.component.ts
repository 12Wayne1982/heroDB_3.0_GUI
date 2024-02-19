import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';
import { ShareDataService } from '../../services/share-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css',
})
export class EditHeroComponent implements OnInit {
  //new
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  hero!: SuperHero;
  sharedData: any;
  heroFormular!: FormGroup;

  constructor(
    private shareDataService: ShareDataService,
    private superHeroService: SuperHeroService,
    public formular: FormBuilder
  ) {
    // wichtig, sonst funktioniert formControlName nicht.
    this.heroFormular = this.formular.group({
      id: [''],
      name: [''],
      alterEgo: [''],
      publisher: [''],
      firstAppearence: [''],
      publishingYear: [''],
      createdBy: [''],
    });
    // Hier werden die Daten aus display-hero, via ShareDataService
    // in den Inputfeldern hinterlegt.
    this.shareDataService.currentData.subscribe((response) => {
      this.sharedData = response;
      console.log(this.sharedData['id']);
      this.heroFormular.setValue({
        id: this.sharedData['id'],
        name: this.sharedData['name'],
        alterEgo: this.sharedData['alterEgo'],
        publisher: this.sharedData['publisher'],
        firstAppearence: this.sharedData['firstAppearence'],
        publishingYear: this.sharedData['publishingYear'],
        createdBy: this.sharedData['createdBy'],
      });
    });
  }

  ngOnInit(): void {}

  editHero() {
    console.log(this.heroFormular.value);
    this.hero = this.heroFormular.value;
    console.log(this.hero);
    this.superHeroService
      .updateHero(this.hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
}
