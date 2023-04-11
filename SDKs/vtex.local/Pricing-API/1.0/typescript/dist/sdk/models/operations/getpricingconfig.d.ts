import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetPricingConfigServerList: readonly ["https://api.vtex.com/{account}/pricing"];
export declare class GetPricingConfigRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
}
export declare class GetPricingConfigResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    pricingConfiguration?: shared.PricingConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
