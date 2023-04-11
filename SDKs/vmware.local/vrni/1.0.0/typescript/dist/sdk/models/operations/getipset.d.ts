import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIPSetSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetIPSetRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetIPSetResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseIPSet?: shared.BaseIPSet;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
