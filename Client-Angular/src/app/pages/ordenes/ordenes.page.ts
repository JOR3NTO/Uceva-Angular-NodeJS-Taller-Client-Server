import { Component, inject } from '@angular/core';
import { OrdenesTableComponent } from '../../components/ordenes-table/ordenes-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Orden } from '../../interfaces/ordenes.interface';
import { State } from '../../interfaces/state.interface';
import { OrdenesService } from '../../services/ordenes/ordenes.service';

/**
 * Página que muestra la lista de órdenes y su estado.
 */
@Component({
  selector: 'app-ordenes',
  imports: [OrdenesTableComponent, AlertComponent],
  templateUrl: './ordenes.page.html',
})
export class OrdenesPage {

  /**
   * Lista de órdenes mantenida por la vista.
   */
  ordenes: Orden[] = [];

  /**
   * Estado de la página para controlar loading/error/success.
   */
  state: State = 'init';

  /**
   * Servicio de órdenes inyectado.
   */
  /** Servicio de órdenes inyectado. */
  private ordenesService = inject(OrdenesService);

  /**
   * Inicializa la página cargando las órdenes.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ordenesService.getAllOrdenes(10).subscribe({
      next: (ordenes) => {
        this.ordenes = ordenes;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      }
    });
  }

}
