import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {


  constructor(private _clienteService: ClienteService) { }

  ngOnInit(): void {

  }


}
