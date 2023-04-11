import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupMembersDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GroupMembersDeleteRequest extends SpeakeasyBase {
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
    /**
     * The member ID.
     */
    memberId: string;
}
export declare class GroupMembersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
