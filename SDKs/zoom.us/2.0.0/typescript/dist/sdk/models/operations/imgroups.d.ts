import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IM Group types:<br>`normal` - Only members can see the other members in the group. Other people can search for members in the group.<br>`shared` - Everyone in the account can see the group and members. <br>`restricted` - No one except group members can see the group or search for other group members.
 */
export declare enum IMGroupsIMGroupListGroupsTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
/**
 * Group object.
 */
export declare class IMGroupsIMGroupListGroups extends SpeakeasyBase {
    /**
     * IM group ID.
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
    type?: IMGroupsIMGroupListGroupsTypeEnum;
}
/**
 * List of IM Groups.
 */
export declare class IMGroupsIMGroupList extends SpeakeasyBase {
    /**
     * List of group objects.
     */
    groups?: IMGroupsIMGroupListGroups[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ImGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * List of groups returned.
     * **Error Code:** `200` <br>
     * List of IM groups returned.<br>
     * Only available for paid account:{accountId}.
     */
    imGroupList?: IMGroupsIMGroupList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
