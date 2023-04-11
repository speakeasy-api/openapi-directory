import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsListRequest extends SpeakeasyBase {
    /**
     * The filters to apply to the operation.
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
export declare class ApplicationsListResponse extends SpeakeasyBase {
    /**
     * OK. The operation was successful.
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
