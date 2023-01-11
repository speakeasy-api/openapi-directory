import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Budgets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBudgetById - Single budget
     *
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
    **/
    getBudgetById(req: operations.GetBudgetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetByIdResponse>;
    /**
     * getBudgetSettingsById - Budget Settings
     *
     * Returns settings for a budget
    **/
    getBudgetSettingsById(req: operations.GetBudgetSettingsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetSettingsByIdResponse>;
    /**
     * getBudgets - List budgets
     *
     * Returns budgets list with summary information
    **/
    getBudgets(req: operations.GetBudgetsRequest, config?: AxiosRequestConfig): Promise<operations.GetBudgetsResponse>;
}
