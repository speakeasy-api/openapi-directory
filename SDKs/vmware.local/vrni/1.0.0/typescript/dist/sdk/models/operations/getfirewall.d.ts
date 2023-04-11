import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetFirewallRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetFirewallResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    /**
     * OK
     */
    baseFirewallRule?: shared.BaseFirewallRule;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
