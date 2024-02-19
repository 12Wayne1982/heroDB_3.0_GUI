import { Component, Input } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SuperHeroService } from '../../services/super-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  addHeroFormular: FormGroup;

  constructor(
    public formular: FormBuilder,
    private superHeroService: SuperHeroService,
    private heroRouter: Router
  ) {
    this.addHeroFormular = this.formular.group({
      name: [''],
      alterEgo: [''],
      publisher: [''],
      firstAppearence: [''],
      publishingYear: [''],
      createdBy: [''],
    });
  }

  createHero(): any {
    console.log(this.addHeroFormular.value);
    this.superHeroService
      .createHero(this.addHeroFormular.value)
      .subscribe((response) => {
        this.heroRouter.navigateByUrl('/display-heroes');
      });
  }
}
