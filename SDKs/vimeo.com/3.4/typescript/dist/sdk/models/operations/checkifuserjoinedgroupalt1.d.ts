import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserJoinedGroupAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
}
export declare class CheckIfUserJoinedGroupAlt1Response extends SpeakeasyBase {
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
