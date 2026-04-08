import { Component, inject } from '@angular/core';
import { EmpresasTableComponent } from '../../components/empresas-table/empresas-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Empresa } from '../../interfaces/empresas.interface';
import { State } from '../../interfaces/state.interface';
import { EmpresasService } from '../../services/empresas/empresas.service';

/** * Página que muestra el listado de empresas.
 *
 * Componente standalone que consume `EmpresasService` para
 * recuperar datos y renderizarlos mediante `EmpresasTableComponent`.
 */

@Component({
  selector: 'app-empresas',
  imports: [EmpresasTableComponent, AlertComponent],
  templateUrl: './empresas.page.html',
})
/**
 * Página que muestra el listado de empresas.
 *
 * Componente standalone que consume `EmpresasService` para
 * recuperar datos y renderizarlos mediante `EmpresasTableComponent`.
 */
export class EmpresasPage {

  /** Listado de empresas a mostrar en la vista. */
  empresas: Empresa[] = [];

  /** Estado del flujo de la página: 'init' | 'loading' | 'success' | 'error'. */
  state: State = 'init';

  /** Servicio para obtener empresas (inyección vía `inject`). */
  private empresasService = inject(EmpresasService);

  /** Inicializa la página: solicita empresas y actualiza el estado. */
  ngOnInit(): void {
    this.state = 'loading';
    this.empresasService.getAllEmpresas(10).subscribe({
      next: (empresas) => {
        this.empresas = empresas;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
