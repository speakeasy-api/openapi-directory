import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserContactsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetUserContactsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The type of contact. The value can be one of the following:
     *
     * @remarks
     * `company`: Contacts from the user's organization.
     * `external`: External contacts.
     */
    type?: string;
}
export declare class GetUserContacts200ApplicationXMLContacts extends SpeakeasyBase {
    /**
     * Contact's email address.
     */
    email?: string;
    /**
     * Contact's first name.
     */
    firstName?: string;
    /**
     * Contact Id.
     */
    id?: string;
    /**
     * Contact's last name.
     */
    lastName?: string;
}
/**
 * **HTTP Status Code:** `200`<br>List of user's contacts returned.
 */
export declare class GetUserContacts200ApplicationXML extends SpeakeasyBase {
    /**
     * The contacts object.
     */
    contacts?: GetUserContacts200ApplicationXMLContacts[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     *
     * @remarks
     * Default value: 30.
     */
    pageSize?: number;
}
export declare class GetUserContacts200ApplicationJSONContacts extends SpeakeasyBase {
    /**
     * Contact's email address.
     */
    email?: string;
    /**
     * Contact's first name.
     */
    firstName?: string;
    /**
     * Contact Id.
     */
    id?: string;
    /**
     * Contact's last name.
     */
    lastName?: string;
}
/**
 * **HTTP Status Code:** `200`<br>List of user's contacts returned.
 */
export declare class GetUserContacts200ApplicationJSON extends SpeakeasyBase {
    /**
     * The contacts object.
     */
    contacts?: GetUserContacts200ApplicationJSONContacts[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     *
     * @remarks
     * Default value: 30.
     */
    pageSize?: number;
}
export declare class GetUserContactsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>List of user's contacts returned.
     */
    getUserContacts200ApplicationJSONObject?: GetUserContacts200ApplicationJSON;
}
