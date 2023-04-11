import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsRemoveMemberRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the group from which to remove the member.
     */
    groupObjectId: string;
    /**
     * Member object id
     */
    memberObjectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class GroupsRemoveMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
