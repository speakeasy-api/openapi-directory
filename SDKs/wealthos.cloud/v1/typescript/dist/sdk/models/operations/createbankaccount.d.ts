import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBankAccountHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreateBankAccountSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreateBankAccountRequest extends SpeakeasyBase {
    headers: CreateBankAccountHeaders;
    request?: any;
    security: CreateBankAccountSecurity;
}
export declare class CreateBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createBankAccount201ApplicationJSONAny?: any;
    createBankAccount400ApplicationJSONAny?: any;
    createBankAccount401ApplicationJSONAny?: any;
    createBankAccount403ApplicationJSONAny?: any;
    createBankAccount404ApplicationJSONAny?: any;
    createBankAccount409ApplicationJSONAny?: any;
    createBankAccount429ApplicationJSONAny?: any;
    createBankAccount500ApplicationJSONAny?: any;
}
