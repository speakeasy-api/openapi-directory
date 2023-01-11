import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSinglePaymentIntentHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreateSinglePaymentIntentSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreateSinglePaymentIntentRequest extends SpeakeasyBase {
    headers: CreateSinglePaymentIntentHeaders;
    request: any;
    security: CreateSinglePaymentIntentSecurity;
}
export declare class CreateSinglePaymentIntentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createSinglePaymentIntent201ApplicationJSONAny?: any;
    createSinglePaymentIntent400ApplicationJSONAny?: any;
    createSinglePaymentIntent401ApplicationJSONAny?: any;
    createSinglePaymentIntent403ApplicationJSONAny?: any;
    createSinglePaymentIntent409ApplicationJSONAny?: any;
    createSinglePaymentIntent429ApplicationJSONAny?: any;
    createSinglePaymentIntent500ApplicationJSONAny?: any;
}
