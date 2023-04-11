import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistributedVirtualPortgroupSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetDistributedVirtualPortgroupRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetDistributedVirtualPortgroupResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    distributedVirtualPortgroup?: shared.DistributedVirtualPortgroup;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
