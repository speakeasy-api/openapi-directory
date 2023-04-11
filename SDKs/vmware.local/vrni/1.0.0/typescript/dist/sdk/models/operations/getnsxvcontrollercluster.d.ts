import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNsxvControllerClusterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetNsxvControllerClusterRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetNsxvControllerClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nsxControllerDataCollection?: shared.NSXControllerDataCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
