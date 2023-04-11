import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetPricingv2StatusServerList: readonly ["https://api.vtex.com/{account}/pricing"];
export declare class GetPricingv2StatusRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
}
/**
 * OK
 */
export declare class GetPricingv2Status200ApplicationJSON extends SpeakeasyBase {
    /**
     * Defines if the account has migrated to Pricing V2.
     */
    hasMigrated?: boolean;
    /**
     * Defines if the account is active.
     */
    isActive?: boolean;
}
export declare class GetPricingv2StatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getPricingv2Status200ApplicationJSONObject?: GetPricingv2Status200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
