export interface Orden {
    id: number;
    customerName: string;
    orderDate: Date;
    totalAmount: number;
    status: OrderStatus;
}

export type OrderStatus = 'Pendiente' | 'En Proceso' | 'Completada' | 'Cancelada';
