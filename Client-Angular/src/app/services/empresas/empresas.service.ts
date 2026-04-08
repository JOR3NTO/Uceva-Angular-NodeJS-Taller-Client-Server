import { inject, Injectable } from '@angular/core';
import { Empresa } from '../../interfaces/empresas.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
/** * Servicio para interactuar con el backend y obtener datos de empresas.
 *
 * Proporciona métodos para recuperar información de empresas desde el servidor.
 * Utiliza `HttpClient` para realizar peticiones HTTP y devuelve `Observable`
 * para que los componentes puedan suscribirse a los datos.
 */

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  /** Cliente HTTP inyectado. */
  private httpClient = inject(HttpClient);

  /**
   * Recupera N empresas desde el endpoint del servidor.
   * @param countEmpresas Cantidad de empresas a solicitar.
   * @returns Observable que emite el arreglo de `Empresa`.
   */
  getAllEmpresas(countEmpresas: number): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(`api/empresas/${countEmpresas}`);
  }

}
