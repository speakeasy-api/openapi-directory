import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyFileToS3Headers extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CopyFileToS3Security extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CopyFileToS3Request extends SpeakeasyBase {
    headers: CopyFileToS3Headers;
    request?: any;
    security: CopyFileToS3Security;
}
export declare class CopyFileToS3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    copyFileToS3200ApplicationJSONAny?: any;
    copyFileToS3400ApplicationJSONAny?: any;
    copyFileToS3401ApplicationJSONAny?: any;
    copyFileToS3403ApplicationJSONAny?: any;
    copyFileToS3404ApplicationJSONAny?: any;
    copyFileToS3429ApplicationJSONAny?: any;
    copyFileToS3500ApplicationJSONAny?: any;
}
