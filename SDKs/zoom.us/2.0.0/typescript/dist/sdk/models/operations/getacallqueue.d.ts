import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetACallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetACallQueueRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Call Queue. This can be retrieved from [List Call Queues API](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-call-queues/listcallqueues).
     */
    callQueueId: string;
}
export declare class GetACallQueue200ApplicationXMLMembersCommonAreaPhones extends SpeakeasyBase {
    /**
     * Unique Identifier of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    id?: string;
    /**
     * Name of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    name?: string;
}
/**
 * Level of the user. The value can be one of the following:<br>
 *
 * @remarks
 * `manager`: A call queue manager has the privilege to change call queue settings, policy settings and manage recordings and voicemail inbox. There can only be one manager for each call queue.<br><br>
 * `user`: Regular user without the privileges of a manager.
 */
export declare enum GetACallQueue200ApplicationXMLMembersUsersLevelEnum {
    Manager = "manager",
    User = "user"
}
export declare class GetACallQueue200ApplicationXMLMembersUsers extends SpeakeasyBase {
    /**
     * User ID: Unique Identifier of the user.
     */
    id?: string;
    /**
     * Level of the user. The value can be one of the following:<br>
     *
     * @remarks
     * `manager`: A call queue manager has the privilege to change call queue settings, policy settings and manage recordings and voicemail inbox. There can only be one manager for each call queue.<br><br>
     * `user`: Regular user without the privileges of a manager.
     */
    level?: GetACallQueue200ApplicationXMLMembersUsersLevelEnum;
    /**
     * Name of the user.
     */
    name?: string;
    /**
     * Determines whether the user can receive calls or not.
     */
    receiveCall?: boolean;
}
export declare class GetACallQueue200ApplicationXMLMembers extends SpeakeasyBase {
    commonAreaPhones?: GetACallQueue200ApplicationXMLMembersCommonAreaPhones[];
    users?: GetACallQueue200ApplicationXMLMembersUsers[];
}
/**
 * Source
 */
export declare enum GetACallQueue200ApplicationXMLPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class GetACallQueue200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the number.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
    /**
     * Source
     */
    source?: GetACallQueue200ApplicationXMLPhoneNumbersSourceEnum;
}
export declare class GetACallQueue200ApplicationXMLSite extends SpeakeasyBase {
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
 * Status of the Call Queue.
 */
export declare enum GetACallQueue200ApplicationXMLStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Call Queue details retrieved successfully.
 */
export declare class GetACallQueue200ApplicationXML extends SpeakeasyBase {
    /**
     * Extension number assigned to the Call Queue.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Call Queue.
     */
    id?: string;
    members?: GetACallQueue200ApplicationXMLMembers;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    phoneNumbers?: GetACallQueue200ApplicationXMLPhoneNumbers[];
    site?: GetACallQueue200ApplicationXMLSite;
    /**
     * Status of the Call Queue.
     */
    status?: GetACallQueue200ApplicationXMLStatusEnum;
}
export declare class GetACallQueue200ApplicationJSONMembersCommonAreaPhones extends SpeakeasyBase {
    /**
     * Unique Identifier of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    id?: string;
    /**
     * Name of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    name?: string;
}
/**
 * Level of the user. The value can be one of the following:<br>
 *
 * @remarks
 * `manager`: A call queue manager has the privilege to change call queue settings, policy settings and manage recordings and voicemail inbox. There can only be one manager for each call queue.<br><br>
 * `user`: Regular user without the privileges of a manager.
 */
export declare enum GetACallQueue200ApplicationJSONMembersUsersLevelEnum {
    Manager = "manager",
    User = "user"
}
export declare class GetACallQueue200ApplicationJSONMembersUsers extends SpeakeasyBase {
    /**
     * User ID: Unique Identifier of the user.
     */
    id?: string;
    /**
     * Level of the user. The value can be one of the following:<br>
     *
     * @remarks
     * `manager`: A call queue manager has the privilege to change call queue settings, policy settings and manage recordings and voicemail inbox. There can only be one manager for each call queue.<br><br>
     * `user`: Regular user without the privileges of a manager.
     */
    level?: GetACallQueue200ApplicationJSONMembersUsersLevelEnum;
    /**
     * Name of the user.
     */
    name?: string;
    /**
     * Determines whether the user can receive calls or not.
     */
    receiveCall?: boolean;
}
export declare class GetACallQueue200ApplicationJSONMembers extends SpeakeasyBase {
    commonAreaPhones?: GetACallQueue200ApplicationJSONMembersCommonAreaPhones[];
    users?: GetACallQueue200ApplicationJSONMembersUsers[];
}
/**
 * Source
 */
export declare enum GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class GetACallQueue200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the number.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
    /**
     * Source
     */
    source?: GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum;
}
export declare class GetACallQueue200ApplicationJSONSite extends SpeakeasyBase {
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
 * Status of the Call Queue.
 */
export declare enum GetACallQueue200ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Call Queue details retrieved successfully.
 */
export declare class GetACallQueue200ApplicationJSON extends SpeakeasyBase {
    /**
     * Extension number assigned to the Call Queue.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Call Queue.
     */
    id?: string;
    members?: GetACallQueue200ApplicationJSONMembers;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    phoneNumbers?: GetACallQueue200ApplicationJSONPhoneNumbers[];
    site?: GetACallQueue200ApplicationJSONSite;
    /**
     * Status of the Call Queue.
     */
    status?: GetACallQueue200ApplicationJSONStatusEnum;
}
export declare class GetACallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Call Queue details retrieved successfully.
     */
    getACallQueue200ApplicationJSONObject?: GetACallQueue200ApplicationJSON;
}
