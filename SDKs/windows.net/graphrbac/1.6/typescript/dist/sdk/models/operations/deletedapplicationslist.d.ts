import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletedApplicationsListRequest extends SpeakeasyBase {
    /**
     * The filter to apply to the operation.
     */
    dollarFilter?: string;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class DeletedApplicationsListResponse extends SpeakeasyBase {
    /**
     * The applications were retrieved successfully.
     */
    applicationListResult?: shared.ApplicationListResult;
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
