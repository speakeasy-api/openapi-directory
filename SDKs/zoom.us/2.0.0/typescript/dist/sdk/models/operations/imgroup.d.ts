import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImGroupRequest extends SpeakeasyBase {
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
}
/**
 * IM Group types:<br>`normal` - Only members can see the other members in the group. Other people can search for members in the group.<br>`shared` - Everyone in the account can see the group and members. <br>`restricted` - No one except group members can see the group or search for other group members.
 */
export declare enum ImGroup200ApplicationXMLTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
/**
 * Group object.
 */
export declare class ImGroup200ApplicationXML extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Members can search for others under same account.
     */
    searchByAccount?: boolean;
    /**
     * Members can search for others in the same email domain.
     */
    searchByDomain?: boolean;
    /**
     * Members can search for others under same master account - including all sub accounts.
     */
    searchByMaAccount?: boolean;
    /**
     * Total number of members in this group.
     */
    totalMembers?: number;
    /**
     * IM Group types:<br>`normal` - Only members can see the other members in the group. Other people can search for members in the group.<br>`shared` - Everyone in the account can see the group and members. <br>`restricted` - No one except group members can see the group or search for other group members.
     */
    type?: ImGroup200ApplicationXMLTypeEnum;
}
/**
 * IM Group types:<br>`normal` - Only members can see the other members in the group. Other people can search for members in the group.<br>`shared` - Everyone in the account can see the group and members. <br>`restricted` - No one except group members can see the group or search for other group members.
 */
export declare enum ImGroup200ApplicationJSONTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
/**
 * Group object.
 */
export declare class ImGroup200ApplicationJSON extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Members can search for others under same account.
     */
    searchByAccount?: boolean;
    /**
     * Members can search for others in the same email domain.
     */
    searchByDomain?: boolean;
    /**
     * Members can search for others under same master account - including all sub accounts.
     */
    searchByMaAccount?: boolean;
    /**
     * Total number of members in this group.
     */
    totalMembers?: number;
    /**
     * IM Group types:<br>`normal` - Only members can see the other members in the group. Other people can search for members in the group.<br>`shared` - Everyone in the account can see the group and members. <br>`restricted` - No one except group members can see the group or search for other group members.
     */
    type?: ImGroup200ApplicationJSONTypeEnum;
}
export declare class ImGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * IM group object returned.<br>
     * **Error Code:** `200` <br>
     * Only available for paid account:{accountId}.
     */
    imGroup200ApplicationJSONObject?: ImGroup200ApplicationJSON;
}
