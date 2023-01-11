import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCategories - List categories
     *
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    **/
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * getCategoryById - Single category
     *
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    **/
    getCategoryById(req: operations.GetCategoryByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryByIdResponse>;
    /**
     * getMonthCategoryById - Single category for a specific budget month
     *
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
    **/
    getMonthCategoryById(req: operations.GetMonthCategoryByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMonthCategoryByIdResponse>;
    /**
     * updateMonthCategory - Update a category for a specific month
     *
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
    **/
    updateMonthCategory(req: operations.UpdateMonthCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMonthCategoryResponse>;
}
