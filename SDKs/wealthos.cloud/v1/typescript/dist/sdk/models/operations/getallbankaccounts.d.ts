import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllBankAccountsQueryParams extends SpeakeasyBase {
    investorId?: string;
}
export declare class GetAllBankAccountsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetAllBankAccountsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
/**
 * Array of bank accounts
**/
export declare class GetAllBankAccounts200ApplicationJson extends SpeakeasyBase {
    bankAccounts?: any[];
}
export declare class GetAllBankAccountsRequest extends SpeakeasyBase {
    queryParams: GetAllBankAccountsQueryParams;
    headers: GetAllBankAccountsHeaders;
    security: GetAllBankAccountsSecurity;
}
export declare class GetAllBankAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllBankAccounts200ApplicationJSONObject?: GetAllBankAccounts200ApplicationJson;
    getAllBankAccounts400ApplicationJSONAny?: any;
    getAllBankAccounts401ApplicationJSONAny?: any;
    getAllBankAccounts403ApplicationJSONAny?: any;
    getAllBankAccounts404ApplicationJSONAny?: any;
    getAllBankAccounts409ApplicationJSONAny?: any;
    getAllBankAccounts429ApplicationJSONAny?: any;
    getAllBankAccounts500ApplicationJSONAny?: any;
}
