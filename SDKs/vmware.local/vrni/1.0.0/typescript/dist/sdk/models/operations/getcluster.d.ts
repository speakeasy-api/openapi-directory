import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClusterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetClusterRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetClusterResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
