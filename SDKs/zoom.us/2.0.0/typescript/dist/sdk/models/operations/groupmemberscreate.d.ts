import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupMembersCreateApplicationJSONMembers extends SpeakeasyBase {
    /**
     * User email. If the user ID is given then the user email should be ignored.
     */
    email?: string;
    /**
     * User ID.
     */
    id?: string;
}
export declare class GroupMembersCreateApplicationJSON extends SpeakeasyBase {
    /**
     * List of Group members
     */
    members?: GroupMembersCreateApplicationJSONMembers[];
}
export declare class GroupMembersCreateRequest extends SpeakeasyBase {
    requestBody: GroupMembersCreateApplicationJSON;
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
}
/**
 * Member added.
 */
export declare class GroupMembersCreate201ApplicationXML extends SpeakeasyBase {
    addedAt?: Date;
    ids?: string;
}
/**
 * Member added.
 */
export declare class GroupMembersCreate201ApplicationJSON extends SpeakeasyBase {
    addedAt?: Date;
    ids?: string;
}
export declare class GroupMembersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Member added.
     */
    groupMembersCreate201ApplicationJSONObject?: GroupMembersCreate201ApplicationJSON;
}
