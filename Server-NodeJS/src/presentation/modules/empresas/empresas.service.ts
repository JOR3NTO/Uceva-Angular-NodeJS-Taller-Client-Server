import { faker } from '@faker-js/faker';
import { Empresa, EmpresaCategory } from '../../../domain/interfaces/empresa.interface';
/**
 * Servicio encargado de la generación y gestión de empresas.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar empresas
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class EmpresasService {
  /**
   * Categorías disponibles para las empresas.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una categoría
   * a cada empresa generada.
   */
  private categories: EmpresaCategory[] = [
    'Tecnologia',
    'Salud',
    'Educacion',
    'Comercio'
  ];
  /**
   * Obtiene un listado de empresas generadas dinámicamente.
   *
   * @param countEmpresas Cantidad de empresas a generar
   * @returns Promesa que resuelve un arreglo de empresas
   *
   * @example
   * ```ts
   * const empresas = await empresasService.getAllEmpresas(10);
   * ```
   */
  public async getAllEmpresas(countEmpresas: number): Promise<Empresa[]> {
    const empresas: Promise<Empresa>[] = [];

    for (let i = 1; i <= countEmpresas; i++) {
      empresas.push(this.generateEmpresa(i));
    }

    return Promise.all(empresas);
  }

  /**
   * Genera una empresa ficticia.
   *
   * @param id Identificador único de la empresa
   * @returns Promesa que resuelve una empresa generada
   */
  private generateEmpresa(id: number): Promise<Empresa> {
    return Promise.resolve({
      id,
      name: faker.company.name(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      category: faker.helpers.arrayElement(this.categories),
    });
  }
}
