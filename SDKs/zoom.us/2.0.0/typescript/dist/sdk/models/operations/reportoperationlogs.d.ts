import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportOperationLogsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * **Optional**<br>
 *
 * @remarks
 * Filter your response by a category type to see reports for a specific category.
 * The value for this field can be one of the following:<br> `all`<br>`user`<br>`user_settings`<br>`account`<br>`billing`<br>`im`<br>`recording`<br>`phone_contacts`<br>`webinar`<br>`sub_account`<br>`role`<br>`zoom_rooms`
 */
export declare enum ReportOperationLogsCategoryTypeEnum {
    All = "all",
    User = "user",
    UserSettings = "user_settings",
    Account = "account",
    Billing = "billing",
    Im = "im",
    Recording = "recording",
    PhoneContacts = "phone_contacts",
    Webinar = "webinar",
    SubAccount = "sub_account",
    Role = "role",
    ZoomRooms = "zoom_rooms"
}
export declare class ReportOperationLogsRequest extends SpeakeasyBase {
    /**
     * **Optional**<br>
     *
     * @remarks
     * Filter your response by a category type to see reports for a specific category.
     * The value for this field can be one of the following:<br> `all`<br>`user`<br>`user_settings`<br>`account`<br>`billing`<br>`im`<br>`recording`<br>`phone_contacts`<br>`webinar`<br>`sub_account`<br>`role`<br>`zoom_rooms`
     */
    categoryType?: ReportOperationLogsCategoryTypeEnum;
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date.
     */
    to: Date;
}
export declare class ReportOperationLogs200ApplicationXMLOperationLogs extends SpeakeasyBase {
    /**
     * Action
     */
    action?: string;
    /**
     * Category type
     */
    categoryType?: string;
    /**
     * Operation detail
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
export declare class ReportOperationLogs200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Array of operation log objects
     */
    operationLogs?: ReportOperationLogs200ApplicationXMLOperationLogs[];
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
}
export declare class ReportOperationLogs200ApplicationJSONOperationLogs extends SpeakeasyBase {
    /**
     * Action
     */
    action?: string;
    /**
     * Category type
     */
    categoryType?: string;
    /**
     * Operation detail
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
export declare class ReportOperationLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Array of operation log objects
     */
    operationLogs?: ReportOperationLogs200ApplicationJSONOperationLogs[];
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
}
export declare class ReportOperationLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Operation Logs Report Returned
     */
    reportOperationLogs200ApplicationJSONObject?: ReportOperationLogs200ApplicationJSON;
}
