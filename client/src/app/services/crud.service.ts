import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film.model';
//-----------------------------------------------
const baseUrl = "http://localhost:1234/api/films";
//------------------------------------------------
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(
    private http : HttpClient
  ) { }
//-------------------------------------------------
getAll(): Observable<Film[]>{
  return this.http.get<Film[]>(`${baseUrl}`);
}
get(id:any): Observable<Film> {
  return this.http.get(`${baseUrl}/${id}`); /// pas de ':' !!!!!!!!!!!!!!
}
findByTitle(title:any):Observable<Film[]>{
  return this.http.get<Film[]>(`${baseUrl}?title=${title}`); //!!!! important <Film[]> sur les 2 lignes
}

findAllPublished(): Observable<Film[]>{
  return this.http.get<Film[]>(`${baseUrl}/published`);
}
findNoPub(): Observable<Film[]>{
  return this.http.get<Film[]>(`${baseUrl}/no`);
}

create(data:any):Observable<any> {
  return this.http.post(baseUrl, data);
}
update(id:any,data:any):Observable<any>{
  return this.http.put(`${baseUrl}/${id}`, data); /// pas de ':' !!!!!!!!!!!!!!
}
delete(id:any):Observable<any> {
return this.http.delete(`${baseUrl}/${id}`); /// pas de ':' !!!!!!!!!!!!!!
}
deleteAll():Observable<any> {
return this.http.delete(baseUrl);
}


}
