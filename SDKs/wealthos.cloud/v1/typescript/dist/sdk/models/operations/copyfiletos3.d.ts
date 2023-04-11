import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CopyFileToS3Security extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class CopyFileToS3RequestBodyFilePaths extends SpeakeasyBase {
    /**
     * file path - "bucket_name/file_key". Eg.- wos-custodian_data-bucket/dir1/dir2/sr210317.XYZ
     */
    path: string;
    /**
     * type of the file specified in the path. Eg.- bk, dc, sr, fx
     */
    type: string;
}
export declare class CopyFileToS3RequestBody extends SpeakeasyBase {
    /**
     * file path array for the file(s) from external data store.
     */
    filePaths: CopyFileToS3RequestBodyFilePaths[];
}
export declare class CopyFileToS3Request extends SpeakeasyBase {
    requestBody?: CopyFileToS3RequestBody;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CopyFileToS3500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class CopyFileToS3429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * The specified resource was not found
 */
export declare class CopyFileToS3404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class CopyFileToS3403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class CopyFileToS3401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class CopyFileToS3400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * success
 */
export declare class CopyFileToS3200ApplicationJSON extends SpeakeasyBase {
    /**
     * name of the bucket which the files were copied
     */
    bucket: string;
    /**
     * array of keys, one for each file stored during the request
     */
    keys: string[];
}
export declare class CopyFileToS3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    copyFileToS3200ApplicationJSONObject?: CopyFileToS3200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    copyFileToS3400ApplicationJSONObject?: CopyFileToS3400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    copyFileToS3401ApplicationJSONObject?: CopyFileToS3401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    copyFileToS3403ApplicationJSONObject?: CopyFileToS3403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    copyFileToS3404ApplicationJSONObject?: CopyFileToS3404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    copyFileToS3429ApplicationJSONObject?: CopyFileToS3429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    copyFileToS3500ApplicationJSONObject?: CopyFileToS3500ApplicationJSON;
}
