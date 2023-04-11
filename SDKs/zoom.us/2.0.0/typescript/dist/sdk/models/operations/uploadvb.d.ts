import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadVBRequestBody extends SpeakeasyBase {
    /**
     * Provide the file's path here.
     */
    file?: string;
}
export declare class UploadVBRequest extends SpeakeasyBase {
    requestBody?: UploadVBRequestBody;
    /**
     * Unique identifier of the account.
     */
    accountId: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 *
 */
export declare class UploadVb201ApplicationXML extends SpeakeasyBase {
    /**
     * Unique identifier of the file.
     */
    id?: string;
    /**
     * Indicates whether or not this file is the default virtual background file.
     */
    isDefault?: boolean;
    /**
     * File name.
     */
    name?: string;
    /**
     * File size.
     */
    size?: string;
    /**
     * File type.
     */
    type?: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 *
 */
export declare class UploadVb201ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier of the file.
     */
    id?: string;
    /**
     * Indicates whether or not this file is the default virtual background file.
     */
    isDefault?: boolean;
    /**
     * File name.
     */
    name?: string;
    /**
     * File size.
     */
    size?: string;
    /**
     * File type.
     */
    type?: string;
}
export declare class UploadVBResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created** <br>
     *
     * @remarks
     *
     */
    uploadVB201ApplicationJSONObject?: UploadVb201ApplicationJSON;
}
