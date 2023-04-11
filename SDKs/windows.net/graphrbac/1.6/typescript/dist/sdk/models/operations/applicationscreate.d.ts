import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsCreateRequest extends SpeakeasyBase {
    /**
     * The parameters for creating an application.
     */
    applicationCreateParameters: shared.ApplicationCreateParameters;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ApplicationsCreateResponse extends SpeakeasyBase {
    /**
     * The application was created successfully.
     */
    application?: Record<string, Record<string, any>>;
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
