import { Orden } from "../interfaces/ordenes.interface";

/**
 * Datos de ejemplo para órdenes usados en desarrollo y tests.
 */
export const ORDENES_MOCK: Orden[] = [
    {
        id: 1,
        customerName: 'Juan Pérez',
        orderDate: new Date('2024-06-01'),
        totalAmount: 150000,
        status: 'Pendiente'
    },
    {
        id: 2,
        customerName: 'María Gómez',
        orderDate: new Date('2024-06-02'),
        totalAmount: 200000,
        status: 'En Proceso'
    },
];
