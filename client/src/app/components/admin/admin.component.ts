import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
identifiant='';
mdp="";

 attentes?: Film[];

  constructor(
    private crudServ: CrudService
  ) { }
//---------------------------------
  ngOnInit(): void {
    this.afficherLesAttentes();
  }
  //-------------------------------
  controle(){
    
  }
  //-------------------------------
 afficherLesAttentes():void{
   console.log('on affiche les attentes');
   this.crudServ.getAll().subscribe(data=>{
     this.attentes= data;
     console.log(data);
   });
 }
}
