import { Component, OnInit } from '@angular/core';
import { NodeapisService } from '../nodeapis.service';
@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {
  id: string;
  band: boolean= false;
  constructor(public apiserver: NodeapisService) { }

  ngOnInit(): void {
  }
 

  
  get():void{
    var n=parseInt(this.id)
    if(this.id.length==2 && n>0 && n<32){
      console.log(this.id);
      this.band=true;
    }
    else{
      alert("ID incorrecto")
    }
    
 /* let urlapi = ``;
  this.apiserver.getapi1(urlapi).subscribe((data:any)=>{

  });*/
}
}
