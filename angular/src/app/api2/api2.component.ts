import { Component, OnInit } from '@angular/core';
import { NodeapisService } from '../nodeapis.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {
  id: string;
  band = false;
  municipios: [] = [];
  constructor(public apiserver: NodeapisService) { }

  ngOnInit(): void {
  }



  get(): void {
    if (this.id) {
      const n = parseInt(this.id, 10);
      if (this.id.length === 2 && n > 0 && n <= 32 && this.id) {
        console.log(this.id);
        this.apiserver.getapi2('http://localhost:3000/api2/' + this.id).subscribe((data: any) => {
          this.band = true;
          this.municipios = data.datos;
          console.log(this.municipios);
        });
      } else {
        swal.fire({ icon: 'error', title: 'Clave Incorrecta' });
        this.municipios = [];
      }
    } else {
      swal.fire({ icon: 'error', title: 'Clave Incorrecta' });
      this.municipios = [];
    }

  }
}
