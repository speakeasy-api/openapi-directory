import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListCommonAreaPhonesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListCommonAreaPhonesRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The total number of records returned from a single API call.
     */
    pageSize?: number;
}
export declare class ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesCallingPlans extends SpeakeasyBase {
    /**
     * Plan name.
     */
    name?: string;
    /**
     * [Plan Number](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans).
     */
    type?: string;
}
/**
 * Phone number source. The value can be either `internal` or `external`.
 */
export declare enum ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the Phone number.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
    /**
     * Phone number source. The value can be either `internal` or `external`.
     */
    source?: ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesPhoneNumbersSourceEnum;
}
export declare class ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesSite extends SpeakeasyBase {
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) to which the common area desk phone is assigned.
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
export declare class ListCommonAreaPhones200ApplicationXMLCommonAreaPhones extends SpeakeasyBase {
    callingPlans?: ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesCallingPlans[];
    /**
     * Type of device (manufacturer name + model name). Refer to the table here for a list of [supported devices](https://marketplace.zoom.us/docs/api-reference/other-references/zoomphone-supporteddevice).
     */
    deviceType?: string;
    /**
     * Display name of the common area phone.
     */
    displayName?: string;
    /**
     * Unique Identifier of the common area phone.
     */
    id?: string;
    /**
     *  Mac address or serial number.
     */
    macAddress?: string;
    phoneNumbers?: ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesPhoneNumbers[];
    site?: ListCommonAreaPhones200ApplicationXMLCommonAreaPhonesSite;
    /**
     * Status of the common area phone. It can be either `online` or `offline`.
     */
    status?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of Common Area Phones retrieved successfully.
 */
export declare class ListCommonAreaPhones200ApplicationXML extends SpeakeasyBase {
    commonAreaPhones?: ListCommonAreaPhones200ApplicationXMLCommonAreaPhones[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * Total number of records found for this query.
     */
    totalRecords?: number;
}
export declare class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesCallingPlans extends SpeakeasyBase {
    /**
     * Plan name.
     */
    name?: string;
    /**
     * [Plan Number](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans).
     */
    type?: string;
}
/**
 * Phone number source. The value can be either `internal` or `external`.
 */
export declare enum ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the Phone number.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
    /**
     * Phone number source. The value can be either `internal` or `external`.
     */
    source?: ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbersSourceEnum;
}
export declare class ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesSite extends SpeakeasyBase {
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) to which the common area desk phone is assigned.
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
export declare class ListCommonAreaPhones200ApplicationJSONCommonAreaPhones extends SpeakeasyBase {
    callingPlans?: ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesCallingPlans[];
    /**
     * Type of device (manufacturer name + model name). Refer to the table here for a list of [supported devices](https://marketplace.zoom.us/docs/api-reference/other-references/zoomphone-supporteddevice).
     */
    deviceType?: string;
    /**
     * Display name of the common area phone.
     */
    displayName?: string;
    /**
     * Unique Identifier of the common area phone.
     */
    id?: string;
    /**
     *  Mac address or serial number.
     */
    macAddress?: string;
    phoneNumbers?: ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesPhoneNumbers[];
    site?: ListCommonAreaPhones200ApplicationJSONCommonAreaPhonesSite;
    /**
     * Status of the common area phone. It can be either `online` or `offline`.
     */
    status?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of Common Area Phones retrieved successfully.
 */
export declare class ListCommonAreaPhones200ApplicationJSON extends SpeakeasyBase {
    commonAreaPhones?: ListCommonAreaPhones200ApplicationJSONCommonAreaPhones[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Total number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * Total number of records found for this query.
     */
    totalRecords?: number;
}
export declare class ListCommonAreaPhonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * List of Common Area Phones retrieved successfully.
     */
    listCommonAreaPhones200ApplicationJSONObject?: ListCommonAreaPhones200ApplicationJSON;
}
