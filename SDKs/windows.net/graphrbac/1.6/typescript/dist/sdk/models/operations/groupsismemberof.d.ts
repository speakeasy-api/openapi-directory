import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsIsMemberOfRequest extends SpeakeasyBase {
    /**
     * The check group membership parameters.
     */
    requestBody: Record<string, Record<string, any>>;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class GroupsIsMemberOfResponse extends SpeakeasyBase {
    /**
     * OK. Indicates success. Returns true if the user, contact, group, or service principal is a direct or a transitive member of the specified group; otherwise, false.
     */
    checkGroupMembershipResult?: Record<string, Record<string, any>>;
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
