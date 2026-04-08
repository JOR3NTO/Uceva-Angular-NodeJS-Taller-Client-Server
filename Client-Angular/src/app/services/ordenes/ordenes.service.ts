import { inject, Injectable } from '@angular/core';
import { Orden } from '../../interfaces/ordenes.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Servicio para operaciones relacionadas con órdenes.
 *
 * Proporciona métodos para recuperar órdenes desde la API y encapsula
 * la lógica de comunicación con el backend para la capa de presentación.
 *
 * @example
 * ```ts
 * ordenesService.getAllOrdenes(10).subscribe(ordenes => console.log(ordenes));
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class OrdenesService {
  /** Cliente HTTP inyectado para realizar llamadas a la API. */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de órdenes desde la API.
   * @param countOrdenes Número máximo de órdenes a recuperar.
   * @returns Observable que emite un array de `Orden`.
   */
  getAllOrdenes(countOrdenes: number): Observable<Orden[]> {
    return this.httpClient.get<Orden[]>(`api/ordenes/${countOrdenes}`);
  }
}
