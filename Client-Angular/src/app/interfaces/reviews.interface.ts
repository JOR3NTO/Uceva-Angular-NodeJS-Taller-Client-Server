/**
 * Representa una reseña / opinión de un usuario sobre un producto.
 */
export interface Review {
    /** Identificador único de la reseña */
    id: number;

    /** Identificador del producto al que pertenece la reseña */
    productId: number;

    /** Nombre del usuario que escribió la reseña */
    userName: string;

    /** Puntuación numérica asignada (ej. 4.5) */
    rating: number;

    /** Comentario textual de la reseña */
    comment: string;
}
