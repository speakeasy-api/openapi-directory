import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFeeHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreateFeeSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreateFeeRequest extends SpeakeasyBase {
    headers: CreateFeeHeaders;
    request: any;
    security: CreateFeeSecurity;
}
export declare class CreateFeeResponse extends SpeakeasyBase {
    contentType: string;
    rootTypeForFeeCreationResponse?: any;
    statusCode: number;
    createFee400ApplicationJSONAny?: any;
    createFee401ApplicationJSONAny?: any;
    createFee403ApplicationJSONAny?: any;
    createFee404ApplicationJSONAny?: any;
    createFee409ApplicationJSONAny?: any;
    createFee429ApplicationJSONAny?: any;
    createFee500ApplicationJSONAny?: any;
}
