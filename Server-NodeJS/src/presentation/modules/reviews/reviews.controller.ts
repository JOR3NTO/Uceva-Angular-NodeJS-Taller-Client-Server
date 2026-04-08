import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ReviewsService } from "./reviews.service";


export class ReviewsController {


  private readonly reviewsService = new ReviewsService();

  getAllReviews = (req: Request, res: Response): void => {
    const { countReviews } = req.params;

    setTimeout(() => {
      this.reviewsService
      .getAllReviews(Number(countReviews))
      .then((reviews) => res.status(201).json(reviews))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
