import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistributedVirtualSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetDistributedVirtualSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetDistributedVirtualSwitchResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    distributedVirtualSwitch?: shared.DistributedVirtualSwitch;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
