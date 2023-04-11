import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFlowSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetFlowRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetFlowResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    flow?: shared.Flow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
