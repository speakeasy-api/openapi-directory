import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSecurityTagSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetSecurityTagRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetSecurityTagResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    securityTag?: shared.SecurityTag;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
