import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServiceSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetServiceRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseService?: shared.BaseService;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
