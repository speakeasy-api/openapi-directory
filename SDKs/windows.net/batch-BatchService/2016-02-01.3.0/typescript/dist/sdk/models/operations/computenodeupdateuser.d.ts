import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeNodeUpdateUserRequest extends SpeakeasyBase {
    /**
     * The parameters for the request.
     */
    nodeUpdateUserParameter: shared.NodeUpdateUserParameter;
    /**
     * Client API Version.
     */
    apiVersion: string;
    /**
     * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * The id of the machine on which you want to update a user account.
     */
    nodeId: string;
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    ocpDate?: string;
    /**
     * The id of the pool that contains the compute node.
     */
    poolId: string;
    /**
     * Whether the server should return the client-request-id identifier in the response.
     */
    returnClientRequestId?: boolean;
    /**
     * The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    timeout?: number;
    /**
     * The name of the user account to update.
     */
    userName: string;
}
export declare class ComputeNodeUpdateUserResponse extends SpeakeasyBase {
    /**
     * The error from the Batch service.
     */
    batchError?: shared.BatchError;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
