import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const PricebycontextServerList: readonly ["https://rnb.{environment}.com.br/api/pricing/pvt"];
export declare class PricebycontextRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    pricebycontextRequest: shared.PricebycontextRequest;
    an: string;
}
export declare class PricebycontextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
