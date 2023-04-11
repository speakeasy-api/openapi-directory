import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPSOperationLogsRequest extends SpeakeasyBase {
    /**
     * Filter the response by the category of the action performed. By default, the value of this field is "all" and thus, the response will include log of all operations for the defined period.<br><br>To only include response for a specific category type, provide a value for `category_type` from this [table](http://marketplace.zoom.us/docs/phone-operation-categories ).
     */
    categoryType?: string;
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report provides only one month worth of data per API request.
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
    /**
     * End date in 'yyyy-mm-dd' format.
     */
    to?: string;
}
export declare class GetPSOperationLogs200ApplicationXMLOperationLogs extends SpeakeasyBase {
    /**
     * Action that was performed.
     */
    action?: string;
    /**
     * Category type of the operation.
     */
    categoryType?: string;
    /**
     * Operation detail.
     */
    operationDetail?: string;
    /**
     * The user who performed the operation.
     */
    operator?: string;
    /**
     * The time at which the operation was performed.
     */
    time?: Date;
}
/**
 * Pagination object.
 */
export declare class GetPSOperationLogs200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Array of operation log objects
     */
    operationLogs?: GetPSOperationLogs200ApplicationXMLOperationLogs[];
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
}
export declare class GetPSOperationLogs200ApplicationJSONOperationLogs extends SpeakeasyBase {
    /**
     * Action that was performed.
     */
    action?: string;
    /**
     * Category type of the operation.
     */
    categoryType?: string;
    /**
     * Operation detail.
     */
    operationDetail?: string;
    /**
     * The user who performed the operation.
     */
    operator?: string;
    /**
     * The time at which the operation was performed.
     */
    time?: Date;
}
/**
 * Pagination object.
 */
export declare class GetPSOperationLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Array of operation log objects
     */
    operationLogs?: GetPSOperationLogs200ApplicationJSONOperationLogs[];
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
}
export declare class GetPSOperationLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Report returned.
     */
    getPSOperationLogs200ApplicationJSONObject?: GetPSOperationLogs200ApplicationJSON;
}
