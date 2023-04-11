import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Period of time when the fixed price will be applied to the SKU.
 */
export declare class CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange extends SpeakeasyBase {
    /**
     * Start date of the price.
     */
    from: string;
    /**
     * End date of the price.
     */
    to: string;
}
/**
 * Array with general information about the SKU's fixed prices.
 */
export declare class CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices extends SpeakeasyBase {
    /**
     * Period of time when the fixed price will be applied to the SKU.
     */
    dateRange?: CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange;
    /**
     * SKU List Fixed Price.
     */
    listPrice?: number;
    /**
     * Minimum quantity of the SKU for the fixed price to be applied.
     */
    minQuantity: number;
    /**
     * Trade policy name or ID that will have the fixed price configured.
     */
    tradePolicyId: string;
    /**
     * Fixed price value.
     */
    value: number;
}
export declare class CreateUpdatePriceOrFixedPriceRequestBody extends SpeakeasyBase {
    /**
     * SKU selling base price. If you decide to fill only the `basePrice` item, the `markup` and `costPrice` will be automatically generated to adapt to the number inserted in `basePrice`.
     */
    basePrice: number;
    /**
     * SKU selling cost price. If you decide to fill the `costPrice` item, you must also fill the `markup` and `basePrice` will be automatically generated based on both values.
     */
    costPrice?: number;
    fixedPrices?: CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices[];
    /**
     * SKU's suggested selling price.
     */
    listPrice: number;
    /**
     * The profit percentage that is to be obtained from the sale of that SKU. If you decide to fill the `markup` item, you must also fill the `costPrice`. The `basePrice` will be automatically generated based on both values.
     */
    markup: number;
}
export declare class CreateUpdatePriceOrFixedPriceRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    requestBody?: CreateUpdatePriceOrFixedPriceRequestBody;
    /**
     * SKU unique identifier number.
     */
    itemId: number;
}
export declare class CreateUpdatePriceOrFixedPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
