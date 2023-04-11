import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProblemEventSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetProblemEventRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetProblemEventResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    problemEvent?: shared.ProblemEvent;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
