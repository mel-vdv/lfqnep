import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProposerComponent } from './components/proposer/proposer.component';
import { AffichesComponent } from './components/affiches/affiches.component';
import { FilmComponent } from './components/film/film.component';
import { OscarsComponent } from './components/oscars/oscars.component';
import { ConcoursComponent } from './components/concours/concours.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AdminComponent,
    ProposerComponent,
    AffichesComponent,
    FilmComponent,
    OscarsComponent,
    ConcoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
