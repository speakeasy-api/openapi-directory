import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Derived {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHoldingSummary - Get Holding Summary
     *
     * The get holding summary service is used to get the summary of asset classifications for the user.<br>By default, accounts with status as ACTIVE and TO BE CLOSED will be considered.<br>If the include parameter value is passed as details then a summary with holdings and account information is returned.<br>
    **/
    getHoldingSummary(req: operations.GetHoldingSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetHoldingSummaryResponse>;
    /**
     * getNetworth - Get Networth Summary
     *
     * The get networth service is used to get the networth for the user.<br>If the include parameter value is passed as details then networth with historical balances is returned. <br>
    **/
    getNetworth(req: operations.GetNetworthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworthResponse>;
    /**
     * getTransactionSummary - Get Transaction Summary
     *
     * The transaction summary service provides the summary values of transactions for the given date range by category type, high-level categories, or system-defined categories.<br><br>Yodlee has the transaction data stored for a day, month, year and week per category as per the availability of user's data. If the include parameter value is passed as details, then summary details will be returned depending on the interval passed-monthly is the default.<br><br><b>Notes:</b><ol> <li> Details can be requested for only one system-defined category<li>Passing categoryType is mandatory except when the groupBy value is CATEGORY_TYPE<li>Dates will not be respected for monthly, yearly, and weekly details<li>When monthly details are requested, only the fromDate and toDate month will be respected<li>When yearly details are requested, only the fromDate and toDate year will be respected<li>For weekly data points, details will be provided for every Sunday date available within the fromDate and toDate<li>This service supports the localization feature and accepts locale as a header parameter</li></ol>
    **/
    getTransactionSummary(req: operations.GetTransactionSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionSummaryResponse>;
}
