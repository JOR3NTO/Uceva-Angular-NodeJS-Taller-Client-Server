/**
 * Representa una orden realizada por un cliente.
 */
export interface Orden {
    /** Identificador único de la orden */
    id: number;
    /** Nombre del cliente que realizó la orden */
    customerName: string;
    /** Fecha en la que se generó la orden */
    orderDate: Date;
    /** Monto total de la orden (en centavos o moneda usada) */
    totalAmount: number;
    /** Estado actual de la orden */
    status: OrderStatus;
}

/**
 * Estado posible de una orden.
 */
export type OrderStatus = 'Pendiente' | 'En Proceso' | 'Completada' | 'Cancelada';
