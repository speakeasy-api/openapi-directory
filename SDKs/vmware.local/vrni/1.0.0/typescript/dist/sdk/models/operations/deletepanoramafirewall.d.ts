import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeletePanoramaFirewallRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DeletePanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
