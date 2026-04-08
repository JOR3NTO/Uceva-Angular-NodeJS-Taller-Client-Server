import { Component, inject } from '@angular/core';
import { OrdenesTableComponent } from '../../components/ordenes-table/ordenes-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Orden } from '../../interfaces/ordenes.interface';
import { State } from '../../interfaces/state.interface';
import { OrdenesService } from '../../services/ordenes/ordenes.service';

@Component({
  selector: 'app-ordenes',
  imports: [OrdenesTableComponent, AlertComponent],
  templateUrl: './ordenes.page.html',
})
export class OrdenesPage {

  ordenes: Orden[] = [];

  state: State = 'init';

  private ordenesService = inject(OrdenesService);

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
