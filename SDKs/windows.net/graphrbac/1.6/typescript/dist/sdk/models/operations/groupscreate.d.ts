import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsCreateRequest extends SpeakeasyBase {
    /**
     * The parameters for the group to create.
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
export declare class GroupsCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    adGroup?: Record<string, Record<string, any>>;
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
