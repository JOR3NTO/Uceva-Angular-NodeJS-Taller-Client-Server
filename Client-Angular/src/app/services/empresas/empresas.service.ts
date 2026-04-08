import { inject, Injectable } from '@angular/core';
import { Empresa } from '../../interfaces/empresas.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {

  private httpClient = inject(HttpClient);

  getAllEmpresas(countEmpresas: number): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(`api/empresas/${countEmpresas}`);
  }
  
}
