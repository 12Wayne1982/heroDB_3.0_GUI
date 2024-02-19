import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { DisplayHeroesComponent } from './components/display-heroes/display-heroes.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'menu', component: MenuComponent },
  { path: 'add-hero', component: AddHeroComponent },
  { path: 'display-heroes', component: DisplayHeroesComponent },
  { path: 'edit-hero', component: EditHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
