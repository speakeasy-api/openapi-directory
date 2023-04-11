import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignedInUserListOwnedObjectsRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class SignedInUserListOwnedObjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The operation was successful.
     */
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
