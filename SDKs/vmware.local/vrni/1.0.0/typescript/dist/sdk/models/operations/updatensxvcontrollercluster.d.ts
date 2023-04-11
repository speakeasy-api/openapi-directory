import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNsxvControllerClusterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class UpdateNsxvControllerClusterRequest extends SpeakeasyBase {
    nsxControllerDataCollection?: shared.NSXControllerDataCollection;
    /**
     * entity id
     */
    id: string;
}
export declare class UpdateNsxvControllerClusterResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    nsxControllerDataCollection?: shared.NSXControllerDataCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
