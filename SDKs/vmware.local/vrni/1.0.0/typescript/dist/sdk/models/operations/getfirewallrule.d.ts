import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFirewallRuleSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetFirewallRuleRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetFirewallRuleResponse extends SpeakeasyBase {
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
