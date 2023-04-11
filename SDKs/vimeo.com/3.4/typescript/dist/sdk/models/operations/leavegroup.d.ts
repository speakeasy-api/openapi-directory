import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LeaveGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class LeaveGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class LeaveGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user owns the group. To remove this user, first apply a new group owner through PATCH.
     */
    legacyError?: shared.LegacyError;
}
