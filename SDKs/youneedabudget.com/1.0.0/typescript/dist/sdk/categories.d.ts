import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The categories for a budget
 */
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List categories
     *
     * @remarks
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     */
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * Single category
     *
     * @remarks
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     */
    getCategoryById(req: operations.GetCategoryByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryByIdResponse>;
    /**
     * Single category for a specific budget month
     *
     * @remarks
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     */
    getMonthCategoryById(req: operations.GetMonthCategoryByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMonthCategoryByIdResponse>;
    /**
     * Update a category for a specific month
     *
     * @remarks
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
     */
    updateMonthCategory(req: operations.UpdateMonthCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMonthCategoryResponse>;
}
