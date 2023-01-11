import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWithdrawalHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreateWithdrawalSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreateWithdrawalRequest extends SpeakeasyBase {
    headers: CreateWithdrawalHeaders;
    request: any;
    security: CreateWithdrawalSecurity;
}
export declare class CreateWithdrawalResponse extends SpeakeasyBase {
    contentType: string;
    rootTypeForWithdrawalCreationResponse?: any;
    statusCode: number;
    createWithdrawal400ApplicationJSONAny?: any;
    createWithdrawal401ApplicationJSONAny?: any;
    createWithdrawal403ApplicationJSONAny?: any;
    createWithdrawal404ApplicationJSONAny?: any;
    createWithdrawal409ApplicationJSONAny?: any;
    createWithdrawal429ApplicationJSONAny?: any;
    createWithdrawal500ApplicationJSONAny?: any;
}
