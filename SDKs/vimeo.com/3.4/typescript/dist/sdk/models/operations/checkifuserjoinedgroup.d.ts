import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserJoinedGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CheckIfUserJoinedGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * No such group exists.
     *
     * @remarks
     * * The authenticated user isn't a member of this group.
     */
    legacyError?: shared.LegacyError;
}
