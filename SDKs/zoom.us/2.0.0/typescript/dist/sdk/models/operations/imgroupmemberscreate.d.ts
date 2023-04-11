import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImGroupMembersCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ImGroupMembersCreateApplicationJSONMembers extends SpeakeasyBase {
    /**
     * User email. If the user ID is given then ignore the user email.
     */
    email?: string;
    /**
     * User ID.
     */
    id?: string;
}
export declare class ImGroupMembersCreateApplicationJSON extends SpeakeasyBase {
    /**
     * List of IM group members.
     */
    members?: ImGroupMembersCreateApplicationJSONMembers[];
}
export declare class ImGroupMembersCreateRequest extends SpeakeasyBase {
    requestBody: ImGroupMembersCreateApplicationJSON;
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
}
/**
 * **HTTP Status Code:** `201` <br>
 *
 * @remarks
 * Member added.
 */
export declare class ImGroupMembersCreate201ApplicationXML extends SpeakeasyBase {
    addedAt?: Date;
    ids?: string;
}
/**
 * **HTTP Status Code:** `201` <br>
 *
 * @remarks
 * Member added.
 */
export declare class ImGroupMembersCreate201ApplicationJSON extends SpeakeasyBase {
    addedAt?: Date;
    ids?: string;
}
export declare class ImGroupMembersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` <br>
     *
     * @remarks
     * Member added.
     */
    imGroupMembersCreate201ApplicationJSONObject?: ImGroupMembersCreate201ApplicationJSON;
}
