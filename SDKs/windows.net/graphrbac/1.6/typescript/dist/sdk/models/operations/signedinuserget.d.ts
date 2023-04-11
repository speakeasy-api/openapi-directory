import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignedInUserGetRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class SignedInUserGetResponse extends SpeakeasyBase {
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
    user?: Record<string, Record<string, any>>;
}
