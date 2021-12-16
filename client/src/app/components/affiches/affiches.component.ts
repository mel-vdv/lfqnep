import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Film } from 'src/app/models/film.model'; 
@Component({
  selector: 'app-affiches',
  templateUrl: './affiches.component.html',
  styleUrls: ['./affiches.component.scss']
})
export class AffichesComponent implements OnInit {
list?: Film[];
  constructor(
    private crudServ: CrudService
  ) { }

  ngOnInit(): void {
    this.charger();
  }
  //--------------------------------
  charger():void{
  this.crudServ.findAllPublished().subscribe((data:any)=>{
    this.list = data;
  });
  }

}
