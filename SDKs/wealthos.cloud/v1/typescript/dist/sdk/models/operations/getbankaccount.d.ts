import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBankAccountPathParams extends SpeakeasyBase {
    bankAccountId: string;
}
export declare class GetBankAccountHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetBankAccountSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetBankAccountRequest extends SpeakeasyBase {
    pathParams: GetBankAccountPathParams;
    headers: GetBankAccountHeaders;
    security: GetBankAccountSecurity;
}
export declare class GetBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBankAccount200ApplicationJSONAny?: any;
    getBankAccount400ApplicationJSONAny?: any;
    getBankAccount401ApplicationJSONAny?: any;
    getBankAccount403ApplicationJSONAny?: any;
    getBankAccount404ApplicationJSONAny?: any;
    getBankAccount409ApplicationJSONAny?: any;
    getBankAccount429ApplicationJSONAny?: any;
    getBankAccount500ApplicationJSONAny?: any;
}
