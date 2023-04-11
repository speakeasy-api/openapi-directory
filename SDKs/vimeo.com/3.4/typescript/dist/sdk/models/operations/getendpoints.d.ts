import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEndpointsRequest extends SpeakeasyBase {
    /**
     * Return an OpenAPI specification.
     */
    openapi?: boolean;
}
export declare class GetEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Standard request.
     */
    endpoint?: shared.Endpoint;
}
