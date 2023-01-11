import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAllInvestorsSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetAllInvestorsQueryParams extends SpeakeasyBase {
    pageNumber?: string;
    pageSize?: string;
    sort?: GetAllInvestorsSortEnum;
}
export declare class GetAllInvestorsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetAllInvestorsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
/**
 * Array of investors
**/
export declare class GetAllInvestors200ApplicationJson extends SpeakeasyBase {
    investors: any[];
    nextPageAvailable: boolean;
}
export declare class GetAllInvestorsRequest extends SpeakeasyBase {
    queryParams: GetAllInvestorsQueryParams;
    headers: GetAllInvestorsHeaders;
    security: GetAllInvestorsSecurity;
}
export declare class GetAllInvestorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllInvestors200ApplicationJSONObject?: GetAllInvestors200ApplicationJson;
    getAllInvestors400ApplicationJSONAny?: any;
    getAllInvestors401ApplicationJSONAny?: any;
    getAllInvestors403ApplicationJSONAny?: any;
    getAllInvestors429ApplicationJSONAny?: any;
    getAllInvestors500ApplicationJSONAny?: any;
}
