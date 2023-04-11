import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAGroupMemberSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Specify the type of action to be performed:<br><br>
 *
 * @remarks
 * `move`: Simultaneously remove a member from one group and move the member to a different group.<br>
 * `set_primary`: Set a primary group for the user.
 *
 */
export declare enum UpdateAGroupMemberApplicationJSONActionEnum {
    Move = "move",
    SetPrimary = "set_primary"
}
export declare class UpdateAGroupMemberApplicationJSON extends SpeakeasyBase {
    /**
     * Specify the type of action to be performed:<br><br>
     *
     * @remarks
     * `move`: Simultaneously remove a member from one group and move the member to a different group.<br>
     * `set_primary`: Set a primary group for the user.
     *
     */
    action: UpdateAGroupMemberApplicationJSONActionEnum;
    /**
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.<br>
     *
     * @remarks
     *
     * To move a user, use this field to specify the groupId of the group where the member is to be moved.<br>
     *
     * To set a primary group for the user, provide the groupId of the group which is going to be the primary group.
     */
    targetGroupId?: string;
}
export declare class UpdateAGroupMemberRequest extends SpeakeasyBase {
    requestBody?: UpdateAGroupMemberApplicationJSON;
    /**
     * Unique Identifier of the group. Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.<br> To change a member's primary group, provide the groupId of the member's current primary group as the value of this field.<br> To remove a member from one group and move the member to another group, provide the groupId of the group from which the member is to be moved.
     */
    groupId: string;
    /**
     * Unique Identifier of the group member. Can be retrieved by calling the [List Group Members](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groupmembers) API.
     */
    memberId: string;
}
export declare class UpdateAGroupMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Group member updated.
     */
    updateAGroupMember204ApplicationJSONAny?: any;
}
