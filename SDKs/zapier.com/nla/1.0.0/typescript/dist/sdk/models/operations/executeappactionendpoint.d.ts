import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExecuteAppActionEndpointSecurity extends SpeakeasyBase {
    accessPointApiKeyHeader?: string;
    accessPointApiKeyQuery?: string;
    accessPointOAuth?: string;
    sessionAuth?: string;
}
export declare class ExecuteAppActionEndpointRequest extends SpeakeasyBase {
    executeRequest: shared.ExecuteRequest;
    exposedAppActionId: string;
}
export declare class ExecuteAppActionEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    executeResponse?: shared.ExecuteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
