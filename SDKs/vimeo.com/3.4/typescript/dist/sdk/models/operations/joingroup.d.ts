import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JoinGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class JoinGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class JoinGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The authenticated user can't join groups.
     *
     * @remarks
     * * The group prohibits the authenticated user from joining, either because the group is not public or because the group's privacy setting is `members`.
     */
    legacyError?: shared.LegacyError;
}
