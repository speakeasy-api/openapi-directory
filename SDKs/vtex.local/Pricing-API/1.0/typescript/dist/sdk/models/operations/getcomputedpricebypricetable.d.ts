import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetComputedPricebypricetableServerList: readonly ["https://api.vtex.com/{account}/pricing"];
export declare class GetComputedPricebypricetableRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Brand ID.
     */
    brandId: number;
    /**
     * Category ID.
     */
    categoryIds: number;
    /**
     * SKU ID.
     */
    itemId: number;
    /**
     * SKU Price Table Name.
     */
    priceTableId: string;
    /**
     * SKU quantity.
     */
    quantity: number;
}
export declare class GetComputedPricebypricetableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getcomputedprice?: shared.Getcomputedprice;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
