import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLayer2NetworkSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetLayer2NetworkRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetLayer2NetworkResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseL2Network?: shared.BaseL2Network;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
