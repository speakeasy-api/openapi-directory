import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: number;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user isn't the group owner.
     */
    legacyError?: shared.LegacyError;
}
