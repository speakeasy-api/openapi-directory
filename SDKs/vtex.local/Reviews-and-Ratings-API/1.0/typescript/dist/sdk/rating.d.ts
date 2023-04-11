import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Rating {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Product Rating
     *
     * @remarks
     * Retrieves the rating of a specific product.
     */
    getProductRating(req: operations.GetProductRatingRequest, config?: AxiosRequestConfig): Promise<operations.GetProductRatingResponse>;
}
