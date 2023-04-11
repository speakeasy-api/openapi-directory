import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddApplicationSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddApplicationResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    application?: shared.Application;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
