import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { environment } from '../../environments/environment';

// const baseUrlUtil = environment.API_ENDPOINT + 'util/listaCliente';
// const baseUrlCliente = environment.API_ENDPOINT + 'cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) { }

  agregarCliente(cliente: Cliente): Observable<any> | null {
    // return this.http.post(baseUrlCliente, cliente, { headers: this._tokenService.agregarAuthorizationHeader() });
    return null;
  }

  listaClienteParametros(nombre: string, dni: string, idUbigeo: number, estado: number): Observable<any> | null {
    // const params = new HttpParams()
    //   .set("nombre", nombre)
    //   .set("dni", dni)
    //   .set("idUbigeo", idUbigeo)
    //   .set("estado", estado.toString());

    // return this.http.get<any>(baseUrlCliente + "/listaPorParametros", { params, headers: this._tokenService.agregarAuthorizationHeader() });

    return null;

  }

  eliminaCliente(id: any): Observable<any>  | null{
    // return this.http.delete(baseUrlCliente + "/eliminaCliente/" + id, { headers: this._tokenService.agregarAuthorizationHeader() });
    return null;
  }

}
