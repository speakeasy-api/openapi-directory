import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IM Group types:<br>`normal` - Only group members can automatically see others in their group. Other people can search for members in the group.<br>`shared` - Everyone under the account can see the group and members automatically.<br>`restricted` - Nobody can see the group or search for members except for the members in the group.
 */
export declare enum ImGroupUpdateApplicationJSONTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
export declare class ImGroupUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Group name: must be unique to one account.
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
     * Members can search for others under same master account, including all sub accounts.
     */
    searchByMaAccount?: boolean;
    /**
     * IM Group types:<br>`normal` - Only group members can automatically see others in their group. Other people can search for members in the group.<br>`shared` - Everyone under the account can see the group and members automatically.<br>`restricted` - Nobody can see the group or search for members except for the members in the group.
     */
    type?: ImGroupUpdateApplicationJSONTypeEnum;
}
export declare class ImGroupUpdateRequest extends SpeakeasyBase {
    requestBody: ImGroupUpdateApplicationJSON;
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
}
export declare class ImGroupUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
