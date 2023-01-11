import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBankAccountPathParams extends SpeakeasyBase {
    bankAccountId: string;
}
export declare class UpdateBankAccountHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class UpdateBankAccountSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class UpdateBankAccountRequest extends SpeakeasyBase {
    pathParams: UpdateBankAccountPathParams;
    headers: UpdateBankAccountHeaders;
    request: any;
    security: UpdateBankAccountSecurity;
}
export declare class UpdateBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateBankAccount201ApplicationJSONAny?: any;
    updateBankAccount400ApplicationJSONAny?: any;
    updateBankAccount401ApplicationJSONAny?: any;
    updateBankAccount403ApplicationJSONAny?: any;
    updateBankAccount404ApplicationJSONAny?: any;
    updateBankAccount409ApplicationJSONAny?: any;
    updateBankAccount429ApplicationJSONAny?: any;
    updateBankAccount500ApplicationJSONAny?: any;
}
