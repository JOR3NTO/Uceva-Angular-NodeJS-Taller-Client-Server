import { Component, inject } from '@angular/core';
import { EmpresasTableComponent } from '../../components/empresas-table/empresas-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Empresa } from '../../interfaces/empresas.interface';
import { State } from '../../interfaces/state.interface';
import { EmpresasService } from '../../services/empresas/empresas.service';

@Component({
  selector: 'app-empresas',
  imports: [EmpresasTableComponent, AlertComponent],
  templateUrl: './empresas.page.html',
})
export class EmpresasPage {

  empresas: Empresa[] = [];

  state: State = 'init';

  private empresasService = inject(EmpresasService);

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
