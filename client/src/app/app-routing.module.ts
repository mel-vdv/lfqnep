import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './components/admin/admin.component';
import { AffichesComponent } from './components/affiches/affiches.component';
import { ConcoursComponent } from './components/concours/concours.component';
import { FilmComponent } from './components/film/film.component';
import { OscarsComponent } from './components/oscars/oscars.component';
import { ProposerComponent } from './components/proposer/proposer.component';

const routes: Routes = [
  {path:'', redirectTo:'films', pathMatch:'full'},
  {path: 'films',
  component:AccueilComponent},
  {path: 'admin',
  component:AdminComponent},
  {path: 'proposer',
  component:ProposerComponent},
  {path: 'affiches',
  component:AffichesComponent},
  {path: 'film/:id',
  component:FilmComponent},
  {path: 'concours',
  component:ConcoursComponent},
  {path: 'oscars',
  component:OscarsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
