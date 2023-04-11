import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSharedLineGroupsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
/**
 * Status of the number.
 */
export declare enum ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
    /**
     * Status of the number.
     */
    status?: ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum;
}
export declare class ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite extends SpeakeasyBase {
    /**
     * Unique Identifier of the [Site](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/getasite).
     */
    id?: string;
    /**
     * Name of the Site.
     */
    name?: string;
}
/**
 * Status of the Shared Line Group.
 */
export declare enum ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListSharedLineGroups200ApplicationXMLSharedLineGroups extends SpeakeasyBase {
    /**
     * Display Name of the Shared Line Group.
     */
    displayName?: string;
    /**
     * Extension number assigned to the Shared Line Group.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Shared Line Group.
     */
    id?: string;
    /**
     * Phone Numbers Assigned to the Shared Line Group.
     */
    phoneNumbers?: ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers[];
    site?: ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite;
    /**
     * Status of the Shared Line Group.
     */
    status?: ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * Shared Line Groups returned.
 */
export declare class ListSharedLineGroups200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    sharedLineGroups?: ListSharedLineGroups200ApplicationXMLSharedLineGroups[];
    /**
     * Total records found in the response for this request.
     */
    totalRecords?: number;
}
/**
 * Status of the number.
 */
export declare enum ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
    /**
     * Status of the number.
     */
    status?: ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum;
}
export declare class ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite extends SpeakeasyBase {
    /**
     * Unique Identifier of the [Site](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/getasite).
     */
    id?: string;
    /**
     * Name of the Site.
     */
    name?: string;
}
/**
 * Status of the Shared Line Group.
 */
export declare enum ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListSharedLineGroups200ApplicationJSONSharedLineGroups extends SpeakeasyBase {
    /**
     * Display Name of the Shared Line Group.
     */
    displayName?: string;
    /**
     * Extension number assigned to the Shared Line Group.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Shared Line Group.
     */
    id?: string;
    /**
     * Phone Numbers Assigned to the Shared Line Group.
     */
    phoneNumbers?: ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers[];
    site?: ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite;
    /**
     * Status of the Shared Line Group.
     */
    status?: ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * Shared Line Groups returned.
 */
export declare class ListSharedLineGroups200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    sharedLineGroups?: ListSharedLineGroups200ApplicationJSONSharedLineGroups[];
    /**
     * Total records found in the response for this request.
     */
    totalRecords?: number;
}
export declare class ListSharedLineGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK** <br>
     *
     * @remarks
     * Shared Line Groups returned.
     */
    listSharedLineGroups200ApplicationJSONObject?: ListSharedLineGroups200ApplicationJSON;
}
