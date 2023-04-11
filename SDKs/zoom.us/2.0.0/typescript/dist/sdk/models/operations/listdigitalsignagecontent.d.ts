import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListDigitalSignageContentRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the folder where the content is located. Provide this field if you would like to filter the response by contents that are only available in a specific folder.
     */
    folderId?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Specify the type of digital signane resource. The value can be one of the following:
     *
     * @remarks
     * * `content`: Returns information about content files.
     * * `folder`: Returns information about the folder where the content files are located.
     */
    type?: string;
}
export declare class ListDigitalSignageContent200ApplicationXMLContents extends SpeakeasyBase {
    /**
     * Unique identifier of the content or the folder.
     */
    id?: string;
    /**
     * Name of the content file or the folder.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List returned.
 */
export declare class ListDigitalSignageContent200ApplicationXML extends SpeakeasyBase {
    contents?: ListDigitalSignageContent200ApplicationXMLContents[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class ListDigitalSignageContent200ApplicationJSONContents extends SpeakeasyBase {
    /**
     * Unique identifier of the content or the folder.
     */
    id?: string;
    /**
     * Name of the content file or the folder.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List returned.
 */
export declare class ListDigitalSignageContent200ApplicationJSON extends SpeakeasyBase {
    contents?: ListDigitalSignageContent200ApplicationJSONContents[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class ListDigitalSignageContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * List returned.
     */
    listDigitalSignageContent200ApplicationJSONObject?: ListDigitalSignageContent200ApplicationJSON;
}
