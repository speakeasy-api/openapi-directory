import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadVBuserRequestBody extends SpeakeasyBase {
    /**
     * Provide the file's path here.
     */
    file?: string;
}
export declare class UploadVBuserRequest extends SpeakeasyBase {
    requestBody?: UploadVBuserRequestBody;
    /**
     * Unique identifier of the user. Retrieve the value for this field by calling the [List users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users) API.
     */
    userId: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 *
 */
export declare class UploadVBuser201ApplicationXML extends SpeakeasyBase {
    /**
     * Unique identifier of the file.
     */
    id?: string;
    /**
     * Indicate whether or not this file is the default virtual background file.
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
export declare class UploadVBuser201ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier of the file.
     */
    id?: string;
    /**
     * Indicate whether or not this file is the default virtual background file.
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
export declare class UploadVBuserResponse extends SpeakeasyBase {
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
    uploadVBuser201ApplicationJSONObject?: UploadVBuser201ApplicationJSON;
}
