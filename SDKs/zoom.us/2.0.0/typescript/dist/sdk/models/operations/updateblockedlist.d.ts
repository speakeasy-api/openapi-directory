import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBlockedListSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * State whether you want the block type to be inbound or outbound.<br>
 *
 * @remarks
 * `inbound`: Pass this value to prevent the blocked number or prefix from calling in to phone users.<br>
 * `outbound`: Pass this value to prevent phone users from calling the blocked number or prefix.
 */
export declare enum UpdateBlockedListApplicationJSONBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Specify the match type for the blocked list. The values can be one of the following:<br><br>
 *
 * @remarks
 * `phoneNumber`: Choose this option (Phone Number Match) if you want to block a specific phone number. Then, in the `phone_number` field, provide the phone number along with the country code.<br><br>
 * `prefix`: Choose this option (Prefix Match) if you want to block all numbers with a specific country code and area code. Next, in the `phone_number` field, enter a country code as part of the prefix. For example, entering 1907 blocks numbers with country code 1 and area code 907.
 */
export declare enum UpdateBlockedListApplicationJSONMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
/**
 * Enable or disable the blocking. One of the following values are allowed:<br>
 *
 * @remarks
 * `active`: Keep the blocking active.<br>
 * `inactive`: Disable the blocking.
 */
export declare enum UpdateBlockedListApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateBlockedListApplicationJSON extends SpeakeasyBase {
    /**
     * State whether you want the block type to be inbound or outbound.<br>
     *
     * @remarks
     * `inbound`: Pass this value to prevent the blocked number or prefix from calling in to phone users.<br>
     * `outbound`: Pass this value to prevent phone users from calling the blocked number or prefix.
     */
    blockType?: UpdateBlockedListApplicationJSONBlockTypeEnum;
    /**
     * Provide a comment to help you identify the blocked number or prefix.
     */
    comment?: string;
    /**
     * Specify the match type for the blocked list. The values can be one of the following:<br><br>
     *
     * @remarks
     * `phoneNumber`: Choose this option (Phone Number Match) if you want to block a specific phone number. Then, in the `phone_number` field, provide the phone number along with the country code.<br><br>
     * `prefix`: Choose this option (Prefix Match) if you want to block all numbers with a specific country code and area code. Next, in the `phone_number` field, enter a country code as part of the prefix. For example, entering 1907 blocks numbers with country code 1 and area code 907.
     */
    matchType?: UpdateBlockedListApplicationJSONMatchTypeEnum;
    /**
     * The phone number to be blocked if you passed "phoneNumber" as the value for the `match_type` field. If you passed "prefix" as the value for the `match_type` field, provide the prefix of the phone number here including the country code. For example, entering 1905 blocks numbers with country code 1 and area code 905.
     */
    phoneNumber?: string;
    /**
     * Enable or disable the blocking. One of the following values are allowed:<br>
     *
     * @remarks
     * `active`: Keep the blocking active.<br>
     * `inactive`: Disable the blocking.
     */
    status?: UpdateBlockedListApplicationJSONStatusEnum;
}
export declare class UpdateBlockedListRequest extends SpeakeasyBase {
    requestBody?: UpdateBlockedListApplicationJSON;
    /**
     * Unique Identifier of the blocked list.
     */
    blockedListId: string;
}
export declare class UpdateBlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Blocked list updated successfully.
     *
     */
    updateBlockedList204ApplicationJSONAny?: any;
}
