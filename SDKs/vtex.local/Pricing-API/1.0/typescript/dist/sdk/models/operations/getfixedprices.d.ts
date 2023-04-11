import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFixedPricesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * SKU ID.
     */
    itemId: number;
}
export declare class GetFixedPricesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fixedPrices?: shared.FixedPrice[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
