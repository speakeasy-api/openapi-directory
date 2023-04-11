import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Budgets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Single budget
     *
     * @remarks
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     */
    getBudgetById(req: operations.GetBudgetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetByIdResponse>;
    /**
     * Budget Settings
     *
     * @remarks
     * Returns settings for a budget
     */
    getBudgetSettingsById(req: operations.GetBudgetSettingsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetSettingsByIdResponse>;
    /**
     * List budgets
     *
     * @remarks
     * Returns budgets list with summary information
     */
    getBudgets(req: operations.GetBudgetsRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetsResponse>;
}
