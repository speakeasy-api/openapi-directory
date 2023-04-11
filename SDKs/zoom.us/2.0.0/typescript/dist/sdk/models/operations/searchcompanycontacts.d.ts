import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchCompanyContactsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records to be returned with a single API call.
     */
    pageSize?: number;
    /**
     * Set `query_presence_status` to `true` in order to include the presence status of a contact in the response.
     */
    queryPresenceStatus?: string;
    /**
     * Provide the keyword - either first name, last name or email of the contact whom you have to search for.
     */
    searchKey: string;
}
/**
 * Presence status of the contact in Zoom Client. The value of this field can be one of the following:
 *
 * @remarks
 * `Do_Not_Disturb`<br> `away`<br> `Available`<br> `Offline`
 */
export declare enum SearchCompanyContacts200ApplicationXMLContactsPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}
export declare class SearchCompanyContacts200ApplicationXMLContacts extends SpeakeasyBase {
    /**
     * Department of the contact as provided in the user's Zoom profile.
     */
    dept?: string;
    /**
     * Direct Number(s) of a user who has Zoom Phone license assigned.
     */
    directNumbers?: string[];
    /**
     * Email address of the contact.
     */
    email?: string;
    /**
     * Extension Number of a user who has Zoom Phone license assigned.
     */
    extensionNumber?: string;
    /**
     * First name of the contact.
     */
    firstName?: string;
    /**
     * User ID of the contact.
     */
    id?: string;
    /**
     * Unique Identifier of the [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) in which the user has been added. An IM Directory group is not the same as a channel. IM Directory allows administrators to assign users in their account to groups that display within the Contacts list on Zoom clients.
     */
    imGroupId?: string;
    /**
     * Name of the [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) in which the user has been added. An IM Directory group is not the same as a channel. IM Directory allows administrators to assign users in their account to groups that display within the Contacts list on Zoom clients.
     */
    imGroupName?: string;
    /**
     * Department of the user as provided in the user's Zoom profile.
     */
    jobTitle?: string;
    /**
     * Last name of the contact.
     */
    lastName?: string;
    /**
     * Location of the user as provided in the user's Zoom profile.
     */
    location?: string;
    /**
     * Phone number of the user.
     */
    phoneNumber?: string;
    /**
     * Presence status of the contact in Zoom Client. The value of this field can be one of the following:
     *
     * @remarks
     * `Do_Not_Disturb`<br> `away`<br> `Available`<br> `Offline`
     */
    presenceStatus?: SearchCompanyContacts200ApplicationXMLContactsPresenceStatusEnum;
    /**
     * SIP Phone number of the user. Returned only if user has SIP phone enabled.
     */
    sipPhoneNumber?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Contact returned successfully.
 */
export declare class SearchCompanyContacts200ApplicationXML extends SpeakeasyBase {
    contacts?: SearchCompanyContacts200ApplicationXMLContacts[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call. Default value is `1`.
     */
    pageSize?: number;
}
/**
 * Presence status of the contact in Zoom Client. The value of this field can be one of the following:
 *
 * @remarks
 * `Do_Not_Disturb`<br> `away`<br> `Available`<br> `Offline`
 */
export declare enum SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}
export declare class SearchCompanyContacts200ApplicationJSONContacts extends SpeakeasyBase {
    /**
     * Department of the contact as provided in the user's Zoom profile.
     */
    dept?: string;
    /**
     * Direct Number(s) of a user who has Zoom Phone license assigned.
     */
    directNumbers?: string[];
    /**
     * Email address of the contact.
     */
    email?: string;
    /**
     * Extension Number of a user who has Zoom Phone license assigned.
     */
    extensionNumber?: string;
    /**
     * First name of the contact.
     */
    firstName?: string;
    /**
     * User ID of the contact.
     */
    id?: string;
    /**
     * Unique Identifier of the [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) in which the user has been added. An IM Directory group is not the same as a channel. IM Directory allows administrators to assign users in their account to groups that display within the Contacts list on Zoom clients.
     */
    imGroupId?: string;
    /**
     * Name of the [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) in which the user has been added. An IM Directory group is not the same as a channel. IM Directory allows administrators to assign users in their account to groups that display within the Contacts list on Zoom clients.
     */
    imGroupName?: string;
    /**
     * Department of the user as provided in the user's Zoom profile.
     */
    jobTitle?: string;
    /**
     * Last name of the contact.
     */
    lastName?: string;
    /**
     * Location of the user as provided in the user's Zoom profile.
     */
    location?: string;
    /**
     * Phone number of the user.
     */
    phoneNumber?: string;
    /**
     * Presence status of the contact in Zoom Client. The value of this field can be one of the following:
     *
     * @remarks
     * `Do_Not_Disturb`<br> `away`<br> `Available`<br> `Offline`
     */
    presenceStatus?: SearchCompanyContacts200ApplicationJSONContactsPresenceStatusEnum;
    /**
     * SIP Phone number of the user. Returned only if user has SIP phone enabled.
     */
    sipPhoneNumber?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Contact returned successfully.
 */
export declare class SearchCompanyContacts200ApplicationJSON extends SpeakeasyBase {
    contacts?: SearchCompanyContacts200ApplicationJSONContacts[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call. Default value is `1`.
     */
    pageSize?: number;
}
export declare class SearchCompanyContactsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Contact returned successfully.
     */
    searchCompanyContacts200ApplicationJSONObject?: SearchCompanyContacts200ApplicationJSON;
}
