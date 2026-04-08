import { Router } from "express";
import { ReviewsController } from "./reviews.controller";

export class ReviewsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ReviewsController();

    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}