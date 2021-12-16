import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  currentFilm: Film={// !! important d'ouvrir les crochets (pour les propriété plus bas)

  };
votePublic :any;
vote1='star';vote2='star';vote3='star';vote4='star';vote5='star';
//------------------------------------------
  constructor(
    private crudServ: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
//----------------------------------
  ngOnInit(): void {
    this.voirFilm(this.route.snapshot.params['id']); 
    // recupérer le /:id de l'url!! (il faut import ActivatedRoute)
  }
//----------------------------------
voirFilm(id: string):void{
  console.log('id:'+id);
  this.crudServ.get(id)
  .subscribe((data:any) =>{
  this.currentFilm = data[0]; // important data[0]!!!!!!!!!!!!!!!!!!
  console.log(data);
  });
  
  switch(this.currentFilm.starsPublic){
    case 0: this.votePublic = "zero";break;
    case 1: this.votePublic = "une";break;
    case 2: this.votePublic = "deux";break;
    case 3 : this.votePublic = "trois"; break;
    case 4 : this.votePublic = "quatre"; break;
    case 5 : this.votePublic = "cinq";break;
    default : console.log('pb stars');
  }
}
//-----------------------------
survol(nb:Number){
  switch(nb){
    case 1: this.vote1 = "starjaune";break;
    case 2: this.vote1 = "starjaune";this.vote2='starjaune'; break;
    case 3 : this.vote1 = "starjaune";this.vote2='starjaune';this.vote3 = "starjaune";break;
    case 4 : this.vote1 = "starjaune";this.vote2='starjaune';this.vote3 = "starjaune";this.vote4='starjaune';break;
    case 5 : this.vote1 = "starjaune";this.vote2='starjaune';this.vote3 = "starjaune";this.vote4='starjaune';this.vote5= 'starjaune';break;
    default: console.log('pb stars');
  }  
}  
//--------------------------
novote=true;
devol(){
  if(this.novote){this.vote1 = 'star';this.vote2='star';this.vote3='star';this.vote4='star';this.vote5='star';}

}
//-------------------------
voter(nb: Number){
  this.novote=false;
//upddate
console.log('je vote '+nb+' etoiles');
switch(nb){
  case 1: this.vote1 = "starjaune";break;
  case 2: this.vote1 = "starjaune";this.vote2='starjaune'; break;
  case 3 : this.vote1 = "starjaune";this.vote2='starjaune';this.vote3 = "starjaune";break;
  case 4 : this.vote1 = "starjaune";this.vote2='starjaune';this.vote3 = "starjaune";this.vote4='starjaune';break;
  case 5 : this.vote1 = "starjaune";this.vote2='starjaune';this.vote3 = "starjaune";this.vote4='starjaune';this.vote5= 'starjaune';break;
  default: console.log('pb stars');
}  

}
}
