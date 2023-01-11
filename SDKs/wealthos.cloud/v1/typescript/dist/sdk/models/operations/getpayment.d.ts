import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPathParams extends SpeakeasyBase {
    transactionId: string;
}
export declare class GetPaymentHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPaymentSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPaymentRequest extends SpeakeasyBase {
    pathParams: GetPaymentPathParams;
    headers: GetPaymentHeaders;
    security: GetPaymentSecurity;
}
export declare class GetPaymentResponse extends SpeakeasyBase {
    contentType: string;
    rootTypeForPayments?: any;
    statusCode: number;
    getPayment400ApplicationJSONAny?: any;
    getPayment401ApplicationJSONAny?: any;
    getPayment403ApplicationJSONAny?: any;
    getPayment404ApplicationJSONAny?: any;
    getPayment429ApplicationJSONAny?: any;
    getPayment500ApplicationJSONAny?: any;
}
