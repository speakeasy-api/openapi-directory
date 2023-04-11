import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsRemoveOwnerRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the group from which to remove the owner.
     */
    objectId: string;
    /**
     * Owner object id
     */
    ownerObjectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class GroupsRemoveOwnerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
