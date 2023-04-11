import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHostSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetHostRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetHostResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    host?: shared.Host;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
