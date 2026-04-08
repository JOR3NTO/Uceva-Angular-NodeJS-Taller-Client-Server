import { faker } from '@faker-js/faker';
import { Empresa, EmpresaCategory } from '../../../domain/interfaces/empresa.interface';

export class EmpresasService {

  private categories: EmpresaCategory[] = [
    'Tecnologia',
    'Salud',
    'Educacion',
    'Comercio'
  ];

  public async getAllEmpresas(countEmpresas: number): Promise<Empresa[]> {
    const empresas: Promise<Empresa>[] = [];

    for (let i = 1; i <= countEmpresas; i++) {
      empresas.push(this.generateEmpresa(i));
    }

    return Promise.all(empresas);
  }


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
