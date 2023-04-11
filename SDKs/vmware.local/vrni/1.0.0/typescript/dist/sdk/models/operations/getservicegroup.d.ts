import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServiceGroupSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetServiceGroupRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetServiceGroupResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
