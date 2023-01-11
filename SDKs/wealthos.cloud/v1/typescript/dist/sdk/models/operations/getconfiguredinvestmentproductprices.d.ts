import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConfiguredInvestmentProductPricesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetConfiguredInvestmentProductPricesQueryParams extends SpeakeasyBase {
    pageNumber?: string;
    pageSize?: string;
    status?: GetConfiguredInvestmentProductPricesStatusEnum;
}
export declare class GetConfiguredInvestmentProductPricesHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetConfiguredInvestmentProductPricesSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetConfiguredInvestmentProductPrices200ApplicationJson extends SpeakeasyBase {
    investmentProductUnitPrices: any[];
    nextPageAvailable: boolean;
}
export declare class GetConfiguredInvestmentProductPricesRequest extends SpeakeasyBase {
    queryParams: GetConfiguredInvestmentProductPricesQueryParams;
    headers: GetConfiguredInvestmentProductPricesHeaders;
    security: GetConfiguredInvestmentProductPricesSecurity;
}
export declare class GetConfiguredInvestmentProductPricesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getConfiguredInvestmentProductPrices200ApplicationJSONObject?: GetConfiguredInvestmentProductPrices200ApplicationJson;
    getConfiguredInvestmentProductPrices401ApplicationJSONAny?: any;
    getConfiguredInvestmentProductPrices403ApplicationJSONAny?: any;
    getConfiguredInvestmentProductPrices404ApplicationJSONAny?: any;
    getConfiguredInvestmentProductPrices429ApplicationJSONAny?: any;
    getConfiguredInvestmentProductPrices500ApplicationJSONAny?: any;
}
