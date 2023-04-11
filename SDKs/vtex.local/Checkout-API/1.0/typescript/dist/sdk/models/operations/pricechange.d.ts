import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PriceChangeRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    priceChangeRequest: shared.PriceChangeRequest;
    /**
     * The index of the item in the cart. Each cart item is identified by an index, starting in 0.
     */
    itemIndex: string;
    /**
     * ID of the orderForm corresponding to the cart whose items will have the price changed.
     */
    orderFormId: string;
}
export declare class PriceChangeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
