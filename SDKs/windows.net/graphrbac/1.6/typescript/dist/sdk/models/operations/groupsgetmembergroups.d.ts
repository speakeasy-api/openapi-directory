import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsGetMemberGroupsRequest extends SpeakeasyBase {
    /**
     * Group filtering parameters.
     */
    requestBody: Record<string, Record<string, any>>;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the group for which to get group membership.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class GroupsGetMemberGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * OK. The operation was successful.
     */
    groupGetMemberGroupsResult?: shared.GroupGetMemberGroupsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
