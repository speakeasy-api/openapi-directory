import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnableCheckpointFirewallRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnableCheckpointFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
