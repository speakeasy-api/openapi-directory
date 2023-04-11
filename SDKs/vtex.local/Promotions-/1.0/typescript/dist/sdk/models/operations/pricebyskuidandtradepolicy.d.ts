import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const PricebyskuIdandtradePolicyServerList: readonly ["https://rnb.{environment}.com.br/api/pricing/pvt"];
export declare class PricebyskuIdandtradePolicyRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    an: string;
    skuId: string;
    tradePolicy: string;
}
export declare class PricebyskuIdandtradePolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
