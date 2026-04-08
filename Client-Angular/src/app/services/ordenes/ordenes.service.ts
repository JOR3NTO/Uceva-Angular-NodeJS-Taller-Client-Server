import { inject, Injectable } from '@angular/core';
import { Orden } from '../../interfaces/ordenes.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdenesService {
  private httpClient = inject(HttpClient);

  getAllOrdenes(countOrdenes: number): Observable<Orden[]> {
    return this.httpClient.get<Orden[]>(`api/ordenes/${countOrdenes}`);
  }
}
