import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCallQueueRecordingsRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Call Queue.
     */
    callQueueId: string;
    /**
     * Start date (within a 6 month range).
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date (within a 6 month range).
     */
    to?: Date;
}
export declare class GetCallQueueRecordings200ApplicationXMLRecordings extends SpeakeasyBase {
    /**
     * Contact name of the callee.
     */
    calleeName?: string;
    /**
     * Name of the callee.
     */
    calleeNumber?: string;
    /**
     * Phone number type of the callee.<br>`1`- Internal<br>`2`- External
     */
    calleeNumberType?: string;
    /**
     * Name of the caller.
     */
    callerName?: string;
    /**
     * Phone number of the caller.
     */
    callerNumber?: string;
    /**
     * Phone number type of the caller.<br>`1`- Internal<br>`2`- External
     */
    callerNumberType?: string;
    /**
     * Date of the recording.
     */
    dateTime?: Date;
    /**
     * Direction of call. The value of this field can be either `outbound` or `inbound`.
     */
    direction?: string;
    /**
     * URL using which the recording can be downloaded.
     */
    downloadUrl?: string;
    /**
     * Duration of the call.
     */
    duration?: number;
    /**
     * Unique Identifier of the recording.
     */
    id?: string;
}
export declare class GetCallQueueRecordings200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    recordings?: GetCallQueueRecordings200ApplicationXMLRecordings[];
    /**
     * End date.
     */
    to?: string;
    /**
     * The total number of records returned for this API call.
     */
    totalRecords?: string;
}
export declare class GetCallQueueRecordings200ApplicationJSONRecordings extends SpeakeasyBase {
    /**
     * Contact name of the callee.
     */
    calleeName?: string;
    /**
     * Name of the callee.
     */
    calleeNumber?: string;
    /**
     * Phone number type of the callee.<br>`1`- Internal<br>`2`- External
     */
    calleeNumberType?: string;
    /**
     * Name of the caller.
     */
    callerName?: string;
    /**
     * Phone number of the caller.
     */
    callerNumber?: string;
    /**
     * Phone number type of the caller.<br>`1`- Internal<br>`2`- External
     */
    callerNumberType?: string;
    /**
     * Date of the recording.
     */
    dateTime?: Date;
    /**
     * Direction of call. The value of this field can be either `outbound` or `inbound`.
     */
    direction?: string;
    /**
     * URL using which the recording can be downloaded.
     */
    downloadUrl?: string;
    /**
     * Duration of the call.
     */
    duration?: number;
    /**
     * Unique Identifier of the recording.
     */
    id?: string;
}
export declare class GetCallQueueRecordings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    recordings?: GetCallQueueRecordings200ApplicationJSONRecordings[];
    /**
     * End date.
     */
    to?: string;
    /**
     * The total number of records returned for this API call.
     */
    totalRecords?: string;
}
export declare class GetCallQueueRecordingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCallQueueRecordings200ApplicationJSONObject?: GetCallQueueRecordings200ApplicationJSON;
}
