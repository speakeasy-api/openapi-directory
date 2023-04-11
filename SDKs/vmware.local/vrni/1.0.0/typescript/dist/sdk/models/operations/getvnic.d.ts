import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVnicSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetVnicRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetVnicResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseVnic?: shared.BaseVnic;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
