import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CategoriesSubscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check if a user follows a category
     */
    checkIfUserSubscribedToCategory(req: operations.CheckIfUserSubscribedToCategoryRequest, security: operations.CheckIfUserSubscribedToCategorySecurity, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToCategoryResponse>;
    /**
     * Check if a user follows a category
     */
    checkIfUserSubscribedToCategoryAlt1(req: operations.CheckIfUserSubscribedToCategoryAlt1Request, security: operations.CheckIfUserSubscribedToCategoryAlt1Security, config?: AxiosRequestConfig): Promise<operations.CheckIfUserSubscribedToCategoryAlt1Response>;
    /**
     * Get all the categories that a user follows
     */
    getCategorySubscriptions(req: operations.GetCategorySubscriptionsRequest, security: operations.GetCategorySubscriptionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCategorySubscriptionsResponse>;
    /**
     * Get all the categories that a user follows
     */
    getCategorySubscriptionsAlt1(req: operations.GetCategorySubscriptionsAlt1Request, security: operations.GetCategorySubscriptionsAlt1Security, config?: AxiosRequestConfig): Promise<operations.GetCategorySubscriptionsAlt1Response>;
    /**
     * Subscribe a user to a single category
     */
    subscribeToCategory(req: operations.SubscribeToCategoryRequest, security: operations.SubscribeToCategorySecurity, config?: AxiosRequestConfig): Promise<operations.SubscribeToCategoryResponse>;
    /**
     * Subscribe a user to a single category
     */
    subscribeToCategoryAlt1(req: operations.SubscribeToCategoryAlt1Request, security: operations.SubscribeToCategoryAlt1Security, config?: AxiosRequestConfig): Promise<operations.SubscribeToCategoryAlt1Response>;
    /**
     * Unsubscribe a user from a category
     */
    unsubscribeFromCategory(req: operations.UnsubscribeFromCategoryRequest, security: operations.UnsubscribeFromCategorySecurity, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromCategoryResponse>;
    /**
     * Unsubscribe a user from a category
     */
    unsubscribeFromCategoryAlt1(req: operations.UnsubscribeFromCategoryAlt1Request, security: operations.UnsubscribeFromCategoryAlt1Security, config?: AxiosRequestConfig): Promise<operations.UnsubscribeFromCategoryAlt1Response>;
}
