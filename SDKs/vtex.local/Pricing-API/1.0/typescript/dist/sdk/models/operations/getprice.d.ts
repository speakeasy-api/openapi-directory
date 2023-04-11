import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPriceRequest extends SpeakeasyBase {
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
export declare class GetPriceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getprice?: shared.Getprice;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
