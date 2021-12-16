import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WsService {
socket:any;
//readonly url:string = "https://resalliance-back.herokuapp.com";

readonly url:string = "127.0.0.1:1234";//adresse du serveur
  constructor() { 
    this.socket = io(this.url);
  }

 listen(ev:string){
return new Observable((subscriber)=>{
  this.socket.on(ev,(data:any)=>{
    subscriber.next(data);
  })
})
 }
 send(ev:string, data:any){
   this.socket.emit(ev,data);
  };
 

}
