import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeapisService {

  constructor(public http: HttpClient) { }

  getapi1(url:string){
    return this.http.get(url);
 }

  getapi2(url:string){
    return this.http.get(url);
 }


}
