import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Empresa, EmpresaCategory } from '../../interfaces/empresas.interface';

/**
 * Componente que renderiza una tabla de empresas.
 *
 * Se utiliza en la página `EmpresasPage` para mostrar el listado
 * y provee mapeo de categorías a `BadgeType` para el sistema de diseño.
 */
@Component({
  selector: 'app-empresas-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './empresas-table.component.html',
})
export class EmpresasTableComponent {

  /** Entrada: lista de empresas a mostrar. */
  @Input() empresas: Empresa[] = [];

  /** Mapeo de categoría -> tipo de badge visual. */
  categoryMap: Record<EmpresaCategory, BadgeType> = {
    'Tecnologia': 'primary',
    'Educacion': 'success',
    'Salud': 'danger',
    'Comercio': 'warning',
  }

}
