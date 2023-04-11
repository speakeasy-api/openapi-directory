import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserContactSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetUserContactRequest extends SpeakeasyBase {
    /**
     * The user's contact Id or email address. The contact can be either a company contact or an external contact.
     */
    contactId: string;
    /**
     * The presence status of the contact.
     *
     * @remarks
     * Include this query parameter with a value of `true` to get the presence status of the contact in the response.
     */
    queryPresenceStatus?: boolean;
}
/**
 * Contact's Presence Status in the Zoom Chat Client. The status can be one of the following: <br> `Do_Not_Disturb`<br> `Away`<br> `Available`<br> `Offline`
 */
export declare enum GetUserContact200ApplicationXMLPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Contact information returned.
 *
 *
 *
 */
export declare class GetUserContact200ApplicationXML extends SpeakeasyBase {
    /**
     * Direct number(s) assigned to the contact.
     */
    directNumbers?: string[];
    /**
     * Contact's email address.
     */
    email?: string;
    /**
     * Extension number of the contact.
     */
    extensionNumber?: string;
    /**
     * Contact's first name
     */
    firstName?: string;
    /**
     * User ID of the contact.
     */
    id?: string;
    /**
     * Contact's last name
     */
    lastName?: string;
    /**
     * Phone number of the contact.
     */
    phoneNumber?: string;
    /**
     * Contact's Presence Status in the Zoom Chat Client. The status can be one of the following: <br> `Do_Not_Disturb`<br> `Away`<br> `Available`<br> `Offline`
     */
    presenceStatus?: GetUserContact200ApplicationXMLPresenceStatusEnum;
}
/**
 * Contact's Presence Status in the Zoom Chat Client. The status can be one of the following: <br> `Do_Not_Disturb`<br> `Away`<br> `Available`<br> `Offline`
 */
export declare enum GetUserContact200ApplicationJSONPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Contact information returned.
 *
 *
 *
 */
export declare class GetUserContact200ApplicationJSON extends SpeakeasyBase {
    /**
     * Direct number(s) assigned to the contact.
     */
    directNumbers?: string[];
    /**
     * Contact's email address.
     */
    email?: string;
    /**
     * Extension number of the contact.
     */
    extensionNumber?: string;
    /**
     * Contact's first name
     */
    firstName?: string;
    /**
     * User ID of the contact.
     */
    id?: string;
    /**
     * Contact's last name
     */
    lastName?: string;
    /**
     * Phone number of the contact.
     */
    phoneNumber?: string;
    /**
     * Contact's Presence Status in the Zoom Chat Client. The status can be one of the following: <br> `Do_Not_Disturb`<br> `Away`<br> `Available`<br> `Offline`
     */
    presenceStatus?: GetUserContact200ApplicationJSONPresenceStatusEnum;
}
export declare class GetUserContactResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Contact information returned.
     *
     *
     *
     */
    getUserContact200ApplicationJSONObject?: GetUserContact200ApplicationJSON;
}
