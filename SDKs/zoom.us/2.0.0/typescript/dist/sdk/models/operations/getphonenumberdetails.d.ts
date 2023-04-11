import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPhoneNumberDetailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetPhoneNumberDetailsRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Phone Number. This can be retrieved from the List Phone Numbers API.
     */
    numberId: string;
}
/**
 * Indicates who the phone number belongs to.<br>
 *
 * @remarks
 * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).<br>
 * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
 */
export declare enum GetPhoneNumberDetails200ApplicationXMLAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare class GetPhoneNumberDetails200ApplicationXMLAssignee extends SpeakeasyBase {
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
     * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).<br>
     * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
     */
    type?: GetPhoneNumberDetails200ApplicationXMLAssigneeTypeEnum;
}
/**
 * The type of number. Values can be one of the following:<br>
 *
 * @remarks
 * `toll`, `tollfree`
 */
export declare enum GetPhoneNumberDetails200ApplicationXMLNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class GetPhoneNumberDetails200ApplicationXMLSite extends SpeakeasyBase {
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
export declare enum GetPhoneNumberDetails200ApplicationXMLSourceEnum {
    Internal = "internal",
    External = "external"
}
/**
 * Status of the number.
 */
export declare enum GetPhoneNumberDetails200ApplicationXMLStatusEnum {
    Pending = "pending",
    Available = "available"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Phone number details retrieved successfully.
 */
export declare class GetPhoneNumberDetails200ApplicationXML extends SpeakeasyBase {
    assignee?: GetPhoneNumberDetails200ApplicationXMLAssignee;
    /**
     * The capability for the phone number, whether it can take incoming calls, make outgoing calls, or both. Values include `incoming`, `outgoing`, or both of these values.
     */
    capability?: string[];
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
    numberType?: GetPhoneNumberDetails200ApplicationXMLNumberTypeEnum;
    site?: GetPhoneNumberDetails200ApplicationXMLSite;
    /**
     * Source of phone number.
     */
    source?: GetPhoneNumberDetails200ApplicationXMLSourceEnum;
    /**
     * Status of the number.
     */
    status?: GetPhoneNumberDetails200ApplicationXMLStatusEnum;
}
/**
 * Indicates who the phone number belongs to.<br>
 *
 * @remarks
 * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).<br>
 * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
 */
export declare enum GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare class GetPhoneNumberDetails200ApplicationJSONAssignee extends SpeakeasyBase {
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
     * `user`: Number has been assigned to an existing phone user allowing them to receive calls through their extension number or direct phone number.<br> `callQueue`: Phone number has been assigned to a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br> `commonAreaPhone`: Phone number has been assigned to a [ provisioned common area desk phone](https://support.zoom.us/hc/en-us/articles/360021119092-Provisioning-Phones-and-Devices).<br>
     * `autoReceptionist`: Phone number has been assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Integrated-Voice-Response-IVR-).<br>
     */
    type?: GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum;
}
/**
 * The type of number. Values can be one of the following:<br>
 *
 * @remarks
 * `toll`, `tollfree`
 */
export declare enum GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class GetPhoneNumberDetails200ApplicationJSONSite extends SpeakeasyBase {
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
export declare enum GetPhoneNumberDetails200ApplicationJSONSourceEnum {
    Internal = "internal",
    External = "external"
}
/**
 * Status of the number.
 */
export declare enum GetPhoneNumberDetails200ApplicationJSONStatusEnum {
    Pending = "pending",
    Available = "available"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Phone number details retrieved successfully.
 */
export declare class GetPhoneNumberDetails200ApplicationJSON extends SpeakeasyBase {
    assignee?: GetPhoneNumberDetails200ApplicationJSONAssignee;
    /**
     * The capability for the phone number, whether it can take incoming calls, make outgoing calls, or both. Values include `incoming`, `outgoing`, or both of these values.
     */
    capability?: string[];
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
    numberType?: GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum;
    site?: GetPhoneNumberDetails200ApplicationJSONSite;
    /**
     * Source of phone number.
     */
    source?: GetPhoneNumberDetails200ApplicationJSONSourceEnum;
    /**
     * Status of the number.
     */
    status?: GetPhoneNumberDetails200ApplicationJSONStatusEnum;
}
export declare class GetPhoneNumberDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Phone number details retrieved successfully.
     */
    getPhoneNumberDetails200ApplicationJSONObject?: GetPhoneNumberDetails200ApplicationJSON;
}
