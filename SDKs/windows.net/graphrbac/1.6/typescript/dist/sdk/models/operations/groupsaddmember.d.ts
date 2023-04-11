import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsAddMemberRequest extends SpeakeasyBase {
    /**
     * The URL of the member object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
     */
    requestBody: Record<string, Record<string, any>>;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the group to which to add the member.
     */
    groupObjectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class GroupsAddMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
