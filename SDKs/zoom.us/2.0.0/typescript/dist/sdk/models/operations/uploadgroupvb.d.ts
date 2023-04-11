import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadGroupVBRequestBody extends SpeakeasyBase {
    /**
     * Provide the file's path here.
     */
    file?: string;
}
export declare class UploadGroupVBRequest extends SpeakeasyBase {
    requestBody?: UploadGroupVBRequestBody;
    /**
     * Provide the id of the file that is to be deleted. To delete multiple files, provide comma separated values for this field.
     */
    fileIds?: string;
    /**
     * Unique identifier of the group. Retrieve the value for this field by calling the [List groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.
     */
    groupId: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 *
 */
export declare class UploadGroupVb201ApplicationXML extends SpeakeasyBase {
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
export declare class UploadGroupVb201ApplicationJSON extends SpeakeasyBase {
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
export declare class UploadGroupVBResponse extends SpeakeasyBase {
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
    uploadGroupVB201ApplicationJSONObject?: UploadGroupVb201ApplicationJSON;
}
