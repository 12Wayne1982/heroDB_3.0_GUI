import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeroesComponent } from './display-heroes.component';

describe('DisplayHeroesComponent', () => {
  let component: DisplayHeroesComponent;
  let fixture: ComponentFixture<DisplayHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayHeroesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
