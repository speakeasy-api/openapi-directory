import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LeaveGroupAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class LeaveGroupAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
}
export declare class LeaveGroupAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user owns the group. To remove this user, first apply a new group owner through PATCH.
     */
    legacyError?: shared.LegacyError;
}
