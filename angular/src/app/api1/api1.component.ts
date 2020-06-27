import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeapisService } from '../nodeapis.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {
   estado: string;
    band: boolean= false;
  ngOnInit(): void {
  }

  constructor (public apiserver: NodeapisService){}

  get():void{
      console.log(this.estado);
      this.band=true;
   /* let urlapi = ``;
    this.apiserver.getapi1(urlapi).subscribe((data:any)=>{

    });*/
  }

  onSubmit(userForm){
    console.log(this.estado);
      this.band=true;
  }

  

}
