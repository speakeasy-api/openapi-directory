import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetMemberGroupsRequest extends SpeakeasyBase {
    /**
     * User filtering parameters.
     */
    requestBody: Record<string, Record<string, any>>;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the user for which to get group membership.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class UsersGetMemberGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK. The operation was successful.
     */
    userGetMemberGroupsResult?: shared.UserGetMemberGroupsResult;
}
