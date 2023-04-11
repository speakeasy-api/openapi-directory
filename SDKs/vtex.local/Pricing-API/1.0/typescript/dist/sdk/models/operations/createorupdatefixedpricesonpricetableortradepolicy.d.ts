import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Period of time when the fixed price will be applied to the SKU.
 */
export declare class CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange extends SpeakeasyBase {
    /**
     * Start date of the price.
     */
    from: string;
    /**
     * End date of the price.
     */
    to: string;
}
export declare class CreateorupdatefixedpricesonpricetableortradepolicyRequestBody extends SpeakeasyBase {
    /**
     * Period of time when the fixed price will be applied to the SKU.
     */
    dateRange?: CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange;
    /**
     * SKU List Fixed Price.
     */
    listPrice?: number;
    /**
     * The minimum SKU quantity for the fixed price to be applied.
     */
    minQuantity: number;
    /**
     * Fixed price value.
     */
    value: number;
}
export declare class CreateorupdatefixedpricesonpricetableortradepolicyRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody?: CreateorupdatefixedpricesonpricetableortradepolicyRequestBody[];
    /**
     * SKU ID.
     */
    itemId: number;
    /**
     * SKU **price table** name or **trade policy** ID.
     */
    priceTableId: string;
}
export declare class CreateorupdatefixedpricesonpricetableortradepolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
