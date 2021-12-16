
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { CrudService } from 'src/app/services/crud.service';
//import { WsService } from 'src/app/services/ws.service';
@Component({
  selector: 'app-proposer',
  templateUrl: './proposer.component.html',
  styleUrls: ['./proposer.component.scss']
})
export class ProposerComponent implements OnInit {
  film: Film = { //de la classe constructeur!!
    pseudo: '',
    email: '',
    titre: '',
    accroche: "Et si...",
   // genre: [''],
    pitch: "",
    note: '',
    casting: ''
  }
 clikIdee= false;
  constructor(
    private crudServ: CrudService
    //,
    //private wsServ : WsService
  ) { }

  ngOnInit(): void {
  }
  poster(): void {
    const data = {
      pseudo: this.film.pseudo,
      email: this.film.email,
      titre: this.film.titre,
      accroche: this.film.accroche,
     // genre: [''],
      pitch: this.film.pitch,
      note: this.film.note,
      casting: this.film.casting
    }
    this.crudServ.create(data).subscribe(
      response=>{
        console.log(response);
        this.film = {
          pseudo: '',
          email: '',
          titre: '',
          accroche: "Et si...",
         // genre: [''],
          pitch: "",
          note: '',
          casting: '',
        };
        this.messageVis=true;
      });

/*
      let message={
        to: 'melvdv@yahoo.fr',
        subject:'lfqnep',
        text:'votre proposition de film qui n\'existe pas a été envoyée avec succès.'
      }
      console.log('on essaye envoiMail');
      this.wsServ.send('envoiMail', message);
      this.wsServ.listen('envoiMailS').subscribe(()=>{
        console.log('mail envoyé');
      })
*/
    };
    messageVis= false;
    ideeRandom= '';
    idees= [
      "idee1","idee2","idee3", "idee4","idee5","idee6","idee7"
    ];
    //-----------------------------
    random(){
      this.clikIdee= true;
      let i = Math.floor(this.idees.length*Math.random());
      this.ideeRandom= this.idees[i];
      this.idees.splice(i,1);
    }
    
    
  
  }


