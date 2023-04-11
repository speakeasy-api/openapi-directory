import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersListRequest extends SpeakeasyBase {
    /**
     * The expand value for the operation result.
     */
    dollarExpand?: string;
    /**
     * The filter to apply to the operation.
     */
    dollarFilter?: string;
    /**
     * (Optional) Set the maximum number of results per response.
     */
    dollarTop?: number;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class UsersListResponse extends SpeakeasyBase {
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
    userListResult?: shared.UserListResult;
}
