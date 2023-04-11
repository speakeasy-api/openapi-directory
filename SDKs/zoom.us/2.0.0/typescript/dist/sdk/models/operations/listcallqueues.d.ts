import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListCallQueuesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListCallQueuesRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
}
/**
 * Source
 */
export declare enum ListCallQueues200ApplicationXMLCallQueuesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class ListCallQueues200ApplicationXMLCallQueuesPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the Phone number assigned.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
    /**
     * Source
     */
    source?: ListCallQueues200ApplicationXMLCallQueuesPhoneNumbersSourceEnum;
}
export declare class ListCallQueues200ApplicationXMLCallQueuesSite extends SpeakeasyBase {
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) where the Call Queue is assigned.
     */
    id?: string;
    /**
     * Name of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites).
     */
    name?: string;
}
/**
 * Status of the Call Queue.<br>`active`: Call queue is enabled and active.<br>`inactive`: Call queue is inactive. Inactive call queues cannot be called but will retain its settings and appear in the [Call Queues](https://zoom.us/pbx/page/telephone/groups#/groups) page.
 */
export declare enum ListCallQueues200ApplicationXMLCallQueuesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListCallQueues200ApplicationXMLCallQueues extends SpeakeasyBase {
    /**
     * Extension number assigned to the queue.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Call Queue.
     */
    id?: string;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    /**
     * Phone number(s) assigned to the call queue.
     */
    phoneNumbers?: ListCallQueues200ApplicationXMLCallQueuesPhoneNumbers[];
    site?: ListCallQueues200ApplicationXMLCallQueuesSite;
    /**
     * Status of the Call Queue.<br>`active`: Call queue is enabled and active.<br>`inactive`: Call queue is inactive. Inactive call queues cannot be called but will retain its settings and appear in the [Call Queues](https://zoom.us/pbx/page/telephone/groups#/groups) page.
     */
    status?: ListCallQueues200ApplicationXMLCallQueuesStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Call Queues listed successfully.
 */
export declare class ListCallQueues200ApplicationXML extends SpeakeasyBase {
    callQueues?: ListCallQueues200ApplicationXMLCallQueues[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records found for this query.
     */
    totalRecords?: number;
}
/**
 * Source
 */
export declare enum ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class ListCallQueues200ApplicationJSONCallQueuesPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the Phone number assigned.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
    /**
     * Source
     */
    source?: ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnum;
}
export declare class ListCallQueues200ApplicationJSONCallQueuesSite extends SpeakeasyBase {
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) where the Call Queue is assigned.
     */
    id?: string;
    /**
     * Name of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites).
     */
    name?: string;
}
/**
 * Status of the Call Queue.<br>`active`: Call queue is enabled and active.<br>`inactive`: Call queue is inactive. Inactive call queues cannot be called but will retain its settings and appear in the [Call Queues](https://zoom.us/pbx/page/telephone/groups#/groups) page.
 */
export declare enum ListCallQueues200ApplicationJSONCallQueuesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListCallQueues200ApplicationJSONCallQueues extends SpeakeasyBase {
    /**
     * Extension number assigned to the queue.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Call Queue.
     */
    id?: string;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    /**
     * Phone number(s) assigned to the call queue.
     */
    phoneNumbers?: ListCallQueues200ApplicationJSONCallQueuesPhoneNumbers[];
    site?: ListCallQueues200ApplicationJSONCallQueuesSite;
    /**
     * Status of the Call Queue.<br>`active`: Call queue is enabled and active.<br>`inactive`: Call queue is inactive. Inactive call queues cannot be called but will retain its settings and appear in the [Call Queues](https://zoom.us/pbx/page/telephone/groups#/groups) page.
     */
    status?: ListCallQueues200ApplicationJSONCallQueuesStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Call Queues listed successfully.
 */
export declare class ListCallQueues200ApplicationJSON extends SpeakeasyBase {
    callQueues?: ListCallQueues200ApplicationJSONCallQueues[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records found for this query.
     */
    totalRecords?: number;
}
export declare class ListCallQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Call Queues listed successfully.
     */
    listCallQueues200ApplicationJSONObject?: ListCallQueues200ApplicationJSON;
}
