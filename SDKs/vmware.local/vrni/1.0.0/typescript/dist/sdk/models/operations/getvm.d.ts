import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVmSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetVmRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetVmResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseVirtualMachine?: shared.BaseVirtualMachine;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
