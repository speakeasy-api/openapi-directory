import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllinvestorAccountsQueryParams extends SpeakeasyBase {
    accountId?: string;
    financialProductId?: string;
    investorId?: string;
    pageNumber?: string;
    pageSize?: string;
    status?: string;
}
export declare class GetAllinvestorAccountsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetAllinvestorAccountsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
/**
 * Array of investor accounts
**/
export declare class GetAllinvestorAccounts200ApplicationJson extends SpeakeasyBase {
    investorAccounts?: any[];
    nextPageAvailable?: boolean;
}
export declare class GetAllinvestorAccountsRequest extends SpeakeasyBase {
    queryParams: GetAllinvestorAccountsQueryParams;
    headers: GetAllinvestorAccountsHeaders;
    security: GetAllinvestorAccountsSecurity;
}
export declare class GetAllinvestorAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllinvestorAccounts200ApplicationJSONObject?: GetAllinvestorAccounts200ApplicationJson;
    getAllinvestorAccounts400ApplicationJSONAny?: any;
    getAllinvestorAccounts401ApplicationJSONAny?: any;
    getAllinvestorAccounts403ApplicationJSONAny?: any;
    getAllinvestorAccounts404ApplicationJSONAny?: any;
    getAllinvestorAccounts409ApplicationJSONAny?: any;
    getAllinvestorAccounts429ApplicationJSONAny?: any;
    getAllinvestorAccounts500ApplicationJSONAny?: any;
}
