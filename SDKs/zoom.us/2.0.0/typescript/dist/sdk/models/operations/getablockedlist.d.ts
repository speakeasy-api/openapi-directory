import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetABlockedListSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetABlockedListRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the blocked list.
     */
    blockedListId: string;
}
/**
 * Block type.<br>
 *
 * @remarks
 * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
 * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
 */
export declare enum GetABlockedList200ApplicationXMLBlockTypeEnum {
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
export declare enum GetABlockedList200ApplicationXMLMatchTypeEnum {
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
export declare enum GetABlockedList200ApplicationXMLStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Blocked list retrieved successfully.
 */
export declare class GetABlockedList200ApplicationXML extends SpeakeasyBase {
    /**
     * Block type.<br>
     *
     * @remarks
     * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
     * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
     */
    blockType?: GetABlockedList200ApplicationXMLBlockTypeEnum;
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
    matchType?: GetABlockedList200ApplicationXMLMatchTypeEnum;
    /**
     * The phone number or the prefix number that is blocked based on the `match_type`.
     */
    phoneNumber?: string;
    /**
     * Indicates whether the blocking is active or inactive. <br>
     *
     * @remarks
     * `active`: The blocked list is active.<br>
     * `inactive`: The blocked list is inactive.
     */
    status?: GetABlockedList200ApplicationXMLStatusEnum;
}
/**
 * Block type.<br>
 *
 * @remarks
 * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
 * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
 */
export declare enum GetABlockedList200ApplicationJSONBlockTypeEnum {
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
export declare enum GetABlockedList200ApplicationJSONMatchTypeEnum {
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
export declare enum GetABlockedList200ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Blocked list retrieved successfully.
 */
export declare class GetABlockedList200ApplicationJSON extends SpeakeasyBase {
    /**
     * Block type.<br>
     *
     * @remarks
     * `inbound`: The blocked number or numbers with the specifie prefix are prevented from calling in to phone users.<br><br>
     * `outbound`: The phone users  are prevented from calling the blocked number or numbers with the specified prefix.
     */
    blockType?: GetABlockedList200ApplicationJSONBlockTypeEnum;
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
    matchType?: GetABlockedList200ApplicationJSONMatchTypeEnum;
    /**
     * The phone number or the prefix number that is blocked based on the `match_type`.
     */
    phoneNumber?: string;
    /**
     * Indicates whether the blocking is active or inactive. <br>
     *
     * @remarks
     * `active`: The blocked list is active.<br>
     * `inactive`: The blocked list is inactive.
     */
    status?: GetABlockedList200ApplicationJSONStatusEnum;
}
export declare class GetABlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Blocked list retrieved successfully.
     */
    getABlockedList200ApplicationJSONObject?: GetABlockedList200ApplicationJSON;
}
