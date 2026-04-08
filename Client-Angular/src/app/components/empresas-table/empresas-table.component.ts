import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Empresa, EmpresaCategory } from '../../interfaces/empresas.interface';

@Component({
  selector: 'app-empresas-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './empresas-table.component.html',
})
export class EmpresasTableComponent {

  @Input() empresas: Empresa[] = [];

  categoryMap: Record<EmpresaCategory, BadgeType> = {
    'Tecnologia': 'primary',
    'Educacion': 'success',
    'Salud': 'danger',
    'Comercio': 'warning',
  }

}
