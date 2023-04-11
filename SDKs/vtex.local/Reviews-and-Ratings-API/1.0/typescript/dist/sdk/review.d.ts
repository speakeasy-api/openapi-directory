import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Review {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Multiple Reviews
     *
     * @remarks
     * Deletes multiple reviews at once.
     */
    deleteMultipleReviews(req: operations.DeleteMultipleReviewsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMultipleReviewsResponse>;
    /**
     * Delete Review
     *
     * @remarks
     * Deletes an existing review.
     */
    deleteReview(req: operations.DeleteReviewRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReviewResponse>;
    /**
     * Update a Review
     *
     * @remarks
     * Updates the information of a review.
     */
    editReview(req: operations.EditReviewRequest, config?: AxiosRequestConfig): Promise<operations.EditReviewResponse>;
    /**
     * Get Review by Review ID
     *
     * @remarks
     * Retrieves information of a product review by its ID.
     */
    getReviewbyReviewId(req: operations.GetReviewbyReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewbyReviewIdResponse>;
    /**
     * Get a list of Reviews
     *
     * @remarks
     * Retrieves a list of reviews.
     */
    getalistofReviews(req: operations.GetalistofReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetalistofReviewsResponse>;
    /**
     * Create Multiple Reviews
     *
     * @remarks
     * Creates multiple reviews.
     */
    saveMultipleReviews(req: operations.SaveMultipleReviewsRequest, config?: AxiosRequestConfig): Promise<operations.SaveMultipleReviewsResponse>;
    /**
     * Create a Review
     *
     * @remarks
     * Creates a single review
     */
    saveReview(req: operations.SaveReviewRequest, config?: AxiosRequestConfig): Promise<operations.SaveReviewResponse>;
}
