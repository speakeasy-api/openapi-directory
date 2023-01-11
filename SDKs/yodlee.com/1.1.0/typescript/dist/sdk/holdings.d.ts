import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Holdings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAssetClassificationList - Get Asset Classification List
     *
     * The get asset classifications list service is used to get the supported asset classifications. <br>The response includes different classification types like assetClass, country, sector, style, etc. and the values corresponding to each type.<br>
    **/
    getAssetClassificationList(config?: AxiosRequestConfig): Promise<operations.GetAssetClassificationListResponse>;
    /**
     * getHoldingTypeList - Get Holding Type List
     *
     * The get holding types list service is used to get the supported holding types.<br>The response includes different holding types such as future, moneyMarketFund, stock, etc. and it returns the supported holding types <br>
    **/
    getHoldingTypeList(config?: AxiosRequestConfig): Promise<operations.GetHoldingTypeListResponse>;
    /**
     * getHoldings - Get Holdings
     *
     * The get holdings service is used to get the list of holdings of a user.<br>Supported holding types can be employeeStockOption, moneyMarketFund, bond, etc. and is obtained using get holding type list service. <br>Asset classifications for the holdings need to be requested through the "include" parameter.<br>Asset classification information for holdings are not available by default, as it is a premium feature.<br>
    **/
    getHoldings(req: operations.GetHoldingsRequest, config?: AxiosRequestConfig): Promise<operations.GetHoldingsResponse>;
    /**
     * getSecurities - Get Security Details
     *
     * The get security details service is used to get all the security information for the holdings<br>
    **/
    getSecurities(req: operations.GetSecuritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSecuritiesResponse>;
}
