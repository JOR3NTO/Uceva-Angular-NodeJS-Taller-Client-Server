import { Review } from "../interfaces/reviews.interface";

export const REVIEWS_MOCK: Review[] = [
    {
        id: 1,
        productId: 1,
        userName: 'Juan Pérez',
        rating: 4,
        comment: 'Muy buen producto, lo recomiendo.',
    },
    {
        id: 2,
        productId: 2,
        userName: 'María García',
        rating: 5,
        comment: 'Excelente calidad, superó mis expectativas.',
    }
];
