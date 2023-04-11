import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVmknicSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetVmknicRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetVmknicResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    vmknic?: shared.Vmknic;
}
