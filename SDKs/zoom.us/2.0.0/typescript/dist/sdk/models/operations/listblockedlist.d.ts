import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListBlockedListSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListBlockedListRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The total number of records returned from a single API call.
     */
    pageSize?: number;
}
/**
 * Block type.<br>
 *
 * @remarks
 * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
 * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
 */
export declare enum ListBlockedList200ApplicationXMLBlockedListBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Indicates the match type for the blocked list. The values can be one of the following:<br>
 *
 * @remarks
 * `phoneNumber`: Indicates that only a specific phone number that is shown in the `phone_number` field is blocked.<br><br>
 * `prefix`: Indicates that all numbers starting with prefix that is shown in the `phone_number` field are blocked.
 */
export declare enum ListBlockedList200ApplicationXMLBlockedListMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
/**
 * Indicates whether the blocking is active or inactive. <br>
 *
 * @remarks
 * `active`: The blocked list is active.<br>
 * `inactive`: The blocked list is inactive.
 */
export declare enum ListBlockedList200ApplicationXMLBlockedListStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListBlockedList200ApplicationXMLBlockedList extends SpeakeasyBase {
    /**
     * Block type.<br>
     *
     * @remarks
     * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
     * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
     */
    blockType?: ListBlockedList200ApplicationXMLBlockedListBlockTypeEnum;
    /**
     * Provide a comment to help you identify the blocked number or prefix.
     */
    comment?: string;
    /**
     * Unique identifier of the blocked list.
     */
    id?: string;
    /**
     * Indicates the match type for the blocked list. The values can be one of the following:<br>
     *
     * @remarks
     * `phoneNumber`: Indicates that only a specific phone number that is shown in the `phone_number` field is blocked.<br><br>
     * `prefix`: Indicates that all numbers starting with prefix that is shown in the `phone_number` field are blocked.
     */
    matchType?: ListBlockedList200ApplicationXMLBlockedListMatchTypeEnum;
    /**
     * The phone number to be blocked if you passed "phoneNumber" as the value for the `match_type` field. If you passed "prefix" as the value for the `match_type` field, provide the prefix of the phone number here including the country code. For example, entering 1905 blocks numbers with country code 1 and area code 905.
     */
    phoneNumber?: string;
    /**
     * Indicates whether the blocking is active or inactive. <br>
     *
     * @remarks
     * `active`: The blocked list is active.<br>
     * `inactive`: The blocked list is inactive.
     */
    status?: ListBlockedList200ApplicationXMLBlockedListStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Blocked list returned successfully.
 */
export declare class ListBlockedList200ApplicationXML extends SpeakeasyBase {
    blockedList?: ListBlockedList200ApplicationXMLBlockedList[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The total number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records found for this query.
     */
    totalRecords?: number;
}
/**
 * Block type.<br>
 *
 * @remarks
 * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
 * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
 */
export declare enum ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Indicates the match type for the blocked list. The values can be one of the following:<br>
 *
 * @remarks
 * `phoneNumber`: Indicates that only a specific phone number that is shown in the `phone_number` field is blocked.<br><br>
 * `prefix`: Indicates that all numbers starting with prefix that is shown in the `phone_number` field are blocked.
 */
export declare enum ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
/**
 * Indicates whether the blocking is active or inactive. <br>
 *
 * @remarks
 * `active`: The blocked list is active.<br>
 * `inactive`: The blocked list is inactive.
 */
export declare enum ListBlockedList200ApplicationJSONBlockedListStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListBlockedList200ApplicationJSONBlockedList extends SpeakeasyBase {
    /**
     * Block type.<br>
     *
     * @remarks
     * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
     * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
     */
    blockType?: ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum;
    /**
     * Provide a comment to help you identify the blocked number or prefix.
     */
    comment?: string;
    /**
     * Unique identifier of the blocked list.
     */
    id?: string;
    /**
     * Indicates the match type for the blocked list. The values can be one of the following:<br>
     *
     * @remarks
     * `phoneNumber`: Indicates that only a specific phone number that is shown in the `phone_number` field is blocked.<br><br>
     * `prefix`: Indicates that all numbers starting with prefix that is shown in the `phone_number` field are blocked.
     */
    matchType?: ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum;
    /**
     * The phone number to be blocked if you passed "phoneNumber" as the value for the `match_type` field. If you passed "prefix" as the value for the `match_type` field, provide the prefix of the phone number here including the country code. For example, entering 1905 blocks numbers with country code 1 and area code 905.
     */
    phoneNumber?: string;
    /**
     * Indicates whether the blocking is active or inactive. <br>
     *
     * @remarks
     * `active`: The blocked list is active.<br>
     * `inactive`: The blocked list is inactive.
     */
    status?: ListBlockedList200ApplicationJSONBlockedListStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Blocked list returned successfully.
 */
export declare class ListBlockedList200ApplicationJSON extends SpeakeasyBase {
    blockedList?: ListBlockedList200ApplicationJSONBlockedList[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The total number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records found for this query.
     */
    totalRecords?: number;
}
export declare class ListBlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Blocked list returned successfully.
     */
    listBlockedList200ApplicationJSONObject?: ListBlockedList200ApplicationJSON;
}
