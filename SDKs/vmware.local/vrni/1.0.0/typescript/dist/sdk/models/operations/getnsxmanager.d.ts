import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNSXManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetNSXManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetNSXManagerResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseEntity?: shared.BaseEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
