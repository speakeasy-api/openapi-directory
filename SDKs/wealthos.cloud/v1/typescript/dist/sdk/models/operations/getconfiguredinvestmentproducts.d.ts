import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConfiguredInvestmentProductsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetConfiguredInvestmentProductsQueryParams extends SpeakeasyBase {
    pageNumber?: string;
    pageSize?: string;
    status?: GetConfiguredInvestmentProductsStatusEnum;
}
export declare class GetConfiguredInvestmentProductsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetConfiguredInvestmentProductsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetConfiguredInvestmentProducts200ApplicationJson extends SpeakeasyBase {
    investmentProducts: any[];
    nextPageAvailable: boolean;
}
export declare class GetConfiguredInvestmentProductsRequest extends SpeakeasyBase {
    queryParams: GetConfiguredInvestmentProductsQueryParams;
    headers: GetConfiguredInvestmentProductsHeaders;
    security: GetConfiguredInvestmentProductsSecurity;
}
export declare class GetConfiguredInvestmentProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getConfiguredInvestmentProducts200ApplicationJSONObject?: GetConfiguredInvestmentProducts200ApplicationJson;
    getConfiguredInvestmentProducts401ApplicationJSONAny?: any;
    getConfiguredInvestmentProducts403ApplicationJSONAny?: any;
    getConfiguredInvestmentProducts404ApplicationJSONAny?: any;
    getConfiguredInvestmentProducts429ApplicationJSONAny?: any;
    getConfiguredInvestmentProducts500ApplicationJSONAny?: any;
}
