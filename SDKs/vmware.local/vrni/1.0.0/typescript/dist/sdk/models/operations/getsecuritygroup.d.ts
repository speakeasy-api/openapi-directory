import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSecurityGroupSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetSecurityGroupRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetSecurityGroupResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseSecurityGroup?: shared.BaseSecurityGroup;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
