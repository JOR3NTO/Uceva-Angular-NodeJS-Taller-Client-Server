import { faker } from '@faker-js/faker';
import { Orden, OrderStatus } from '../../../domain/interfaces/ordenes.interface';

export class OrdenesService {

  private categories: OrderStatus[] = [
    'Pendiente',
    'En Proceso',
    'Completada',
    'Cancelada'
  ];

  public async getAllOrdenes(countOrdenes: number): Promise<Orden[]> {
    const products: Promise<Orden>[] = [];

    for (let i = 1; i <= countOrdenes; i++) {
      products.push(this.generateOrden(i));
    }

    return Promise.all(products);
  }


  private generateOrden(id: number): Promise<Orden> {
    return Promise.resolve({
      id,
      customerName: faker.person.fullName(),
      orderDate: faker.date.past(),
      totalAmount: Number(
        faker.commerce.price({ min: 1, max: 100, dec: 2 })
      ),
      status: faker.helpers.arrayElement(this.categories),
    });
  }
}
