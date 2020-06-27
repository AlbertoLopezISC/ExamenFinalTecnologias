import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeapisService } from '../nodeapis.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {
  estado: string;
  band: boolean = false;
  dataEstado: any;
  ngOnInit(): void {
  }

  constructor(public apiserver: NodeapisService) { }



  onSubmit() {
    if (this.estado) {
      console.log(this.estado);
      this.apiserver.getapi1('http://localhost:3000/api/' + this.estado).subscribe((data: any) => {
        if (data.datos) {
          this.dataEstado = data.datos[0];
          this.band = true;
        } else {
          swal.fire({ icon: 'error', title: 'Estado NO Encontrado' });
          this.dataEstado = [];
          this.band = false;
        }

      });
    } else {
      swal.fire({ icon: 'error', title: 'Debes llenar correctamente el input' });
    }
  }



}
