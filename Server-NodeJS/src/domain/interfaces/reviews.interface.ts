/**
 * Representa una reseña (review) asociada a un producto.
 */
export interface Review {
    /** Identificador único de la reseña. */
    id: number;
    /** Identificador del producto al que pertenece la reseña. */
    productId: number;
    /** Nombre de usuario que dejó la reseña. */
    userName: string;
    /** Puntuación de la reseña (1-5). */
    rating: number;
    /** Comentario de texto de la reseña. */
    comment: string;
}