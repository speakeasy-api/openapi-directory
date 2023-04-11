import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListAccountPhoneNumbersSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The type of assignee to whom the number is assigned. The value can be one of the following:<br>
 *
 * @remarks
 * `user`<br> `callQueue`<br> `autoReceptionist`<br>
 * `commonAreaPhone`
 */
export declare enum ListAccountPhoneNumbersExtensionTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
/**
 * The type of phone number. The value can be either `toll` or `tollfree`.
 */
export declare enum ListAccountPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
/**
 * Query response by number assignment. The value can be one of the following:
 *
 * @remarks
 * <br>
 * `assigned`: The number has been assigned to either a user, a call queue, an auto-receptionist or a common area phone in an account. <br>`unassigned`: The number is not assigned to anyone.<br>
 * `all`: Include both assigned and unassigned numbers in the response.<br>
 * `byoc`: Include Bring Your Own Carrier (BYOC) numbers only in the response.
 */
export declare enum ListAccountPhoneNumbersTypeEnum {
    Assigned = "assigned",
    Unassigned = "unassigned",
    All = "all"
}
export declare class ListAccountPhoneNumbersRequest extends SpeakeasyBase {
    /**
     * The type of assignee to whom the number is assigned. The value can be one of the following:<br>
     *
     * @remarks
     * `user`<br> `callQueue`<br> `autoReceptionist`<br>
     * `commonAreaPhone`
     */
    extensionType?: ListAccountPhoneNumbersExtensionTypeEnum;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The type of phone number. The value can be either `toll` or `tollfree`.
     */
    numberType?: ListAccountPhoneNumbersNumberTypeEnum;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Include or exclude pending numbers in the response. The value can be either `true` or `false`.
     */
    pendingNumbers?: boolean;
    /**
     * Unique identifier of the site. Use this query parameter if you have enabled multiple sites and would like to filter the response of this API call by a specific phone site. See [Managing multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites) or [Adding a site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites#h_05c88e35-1593-491f-b1a8-b7139a75dc15) for details.
     */
    siteId?: string;
    /**
     * Query response by number assignment. The value can be one of the following:
     *
     * @remarks
     * <br>
     * `assigned`: The number has been assigned to either a user, a call queue, an auto-receptionist or a common area phone in an account. <br>`unassigned`: The number is not assigned to anyone.<br>
     * `all`: Include both assigned and unassigned numbers in the response.<br>
     * `byoc`: Include Bring Your Own Carrier (BYOC) numbers only in the response.
     */
    type?: ListAccountPhoneNumbersTypeEnum;
}
/**
 * Indicates who the phone number belongs to.<br>
 *
 * @remarks
 * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).
 * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
 */
export declare enum ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare class ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersAssignee extends SpeakeasyBase {
    /**
     * Extension number of the Phone.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the user to whom the number has been assigned.
     */
    id?: string;
    /**
     * Name of the user to whom the number has been assigned.
     */
    name?: string;
    /**
     * Indicates who the phone number belongs to.<br>
     *
     * @remarks
     * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).
     * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
     */
    type?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersAssigneeTypeEnum;
}
/**
 * Displayed when the `type` request parameter is `byoc`.
 */
export declare class ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersCarrier extends SpeakeasyBase {
    /**
     * The carrier code.
     */
    code?: string;
    /**
     * Name of the carrier to which the phone number is assigned.
     */
    name?: string;
}
/**
 * The type of number. Values can be one of the following:<br>
 *
 * @remarks
 * `toll`, `tollfree`
 */
export declare enum ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
/**
 * Displayed when the `type` request parameter is `byoc`.
 */
export declare class ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersSipGroup extends SpeakeasyBase {
    /**
     * The ID of the SIP group. See the **Creating SIP groups** section in [Creating a shared directory of external contacts](https://support.zoom.us/hc/en-us/articles/360037050092-Creating-a-shared-directory-of-external-contacts) for details.
     */
    id?: string;
    /**
     * Name of the SIP group for which the phone number is assigned.
     */
    name?: string;
}
export declare class ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersSite extends SpeakeasyBase {
    /**
     * Target [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) in which the phone number was assigned. Sites allow you to organize the phone users in your organization. For example, you sites could be created based on different office locations.
     */
    id?: string;
    /**
     * Name of the site where the phone number is assigned.
     */
    name?: string;
}
/**
 * Source of phone number.
 */
export declare enum ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
/**
 * Status of the number.
 */
export declare enum ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class ListAccountPhoneNumbers200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    assignee?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersAssignee;
    /**
     * The capability for the phone number, whether it can take incoming calls, make outgoing calls, or both. Values include `incoming`, `outgoing`, or both of these values.
     */
    capability?: string[];
    /**
     * Displayed when the `type` request parameter is `byoc`.
     */
    carrier?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersCarrier;
    /**
     * The display name for the phone number.
     */
    displayName?: string;
    /**
     * Unique Identifier of the Phone Number.
     */
    id?: string;
    /**
     * Location (city, state and country) where the Phone number is assigned.
     */
    location?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
    /**
     * The type of number. Values can be one of the following:<br>
     *
     * @remarks
     * `toll`, `tollfree`
     */
    numberType?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersNumberTypeEnum;
    /**
     * Displayed when the `type` request parameter is `byoc`.
     */
    sipGroup?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersSipGroup;
    site?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersSite;
    /**
     * Source of phone number.
     */
    source?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersSourceEnum;
    /**
     * Status of the number.
     */
    status?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbersStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Phone numbers listed successfully.
 */
export declare class ListAccountPhoneNumbers200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.)
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    phoneNumbers?: ListAccountPhoneNumbers200ApplicationXMLPhoneNumbers[];
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
/**
 * Indicates who the phone number belongs to.<br>
 *
 * @remarks
 * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).
 * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
 */
export declare enum ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssignee extends SpeakeasyBase {
    /**
     * Extension number of the Phone.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the user to whom the number has been assigned.
     */
    id?: string;
    /**
     * Name of the user to whom the number has been assigned.
     */
    name?: string;
    /**
     * Indicates who the phone number belongs to.<br>
     *
     * @remarks
     * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).
     * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
     */
    type?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum;
}
/**
 * Displayed when the `type` request parameter is `byoc`.
 */
export declare class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier extends SpeakeasyBase {
    /**
     * The carrier code.
     */
    code?: string;
    /**
     * Name of the carrier to which the phone number is assigned.
     */
    name?: string;
}
/**
 * The type of number. Values can be one of the following:<br>
 *
 * @remarks
 * `toll`, `tollfree`
 */
export declare enum ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
/**
 * Displayed when the `type` request parameter is `byoc`.
 */
export declare class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup extends SpeakeasyBase {
    /**
     * The ID of the SIP group. See the **Creating SIP groups** section in [Creating a shared directory of external contacts](https://support.zoom.us/hc/en-us/articles/360037050092-Creating-a-shared-directory-of-external-contacts) for details.
     */
    id?: string;
    /**
     * Name of the SIP group for which the phone number is assigned.
     */
    name?: string;
}
export declare class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSite extends SpeakeasyBase {
    /**
     * Target [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) in which the phone number was assigned. Sites allow you to organize the phone users in your organization. For example, you sites could be created based on different office locations.
     */
    id?: string;
    /**
     * Name of the site where the phone number is assigned.
     */
    name?: string;
}
/**
 * Source of phone number.
 */
export declare enum ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
/**
 * Status of the number.
 */
export declare enum ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    assignee?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssignee;
    /**
     * The capability for the phone number, whether it can take incoming calls, make outgoing calls, or both. Values include `incoming`, `outgoing`, or both of these values.
     */
    capability?: string[];
    /**
     * Displayed when the `type` request parameter is `byoc`.
     */
    carrier?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier;
    /**
     * The display name for the phone number.
     */
    displayName?: string;
    /**
     * Unique Identifier of the Phone Number.
     */
    id?: string;
    /**
     * Location (city, state and country) where the Phone number is assigned.
     */
    location?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
    /**
     * The type of number. Values can be one of the following:<br>
     *
     * @remarks
     * `toll`, `tollfree`
     */
    numberType?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum;
    /**
     * Displayed when the `type` request parameter is `byoc`.
     */
    sipGroup?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup;
    site?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSite;
    /**
     * Source of phone number.
     */
    source?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum;
    /**
     * Status of the number.
     */
    status?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Phone numbers listed successfully.
 */
export declare class ListAccountPhoneNumbers200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.)
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    phoneNumbers?: ListAccountPhoneNumbers200ApplicationJSONPhoneNumbers[];
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListAccountPhoneNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Phone numbers listed successfully.
     */
    listAccountPhoneNumbers200ApplicationJSONObject?: ListAccountPhoneNumbers200ApplicationJSON;
}
