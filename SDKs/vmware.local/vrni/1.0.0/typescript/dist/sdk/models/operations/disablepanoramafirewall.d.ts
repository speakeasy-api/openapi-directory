import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisablePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DisablePanoramaFirewallRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DisablePanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
