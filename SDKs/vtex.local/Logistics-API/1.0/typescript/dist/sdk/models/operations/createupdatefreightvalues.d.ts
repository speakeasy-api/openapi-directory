import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUpdateFreightValuesCreateUpdateFreightValuesRequest extends SpeakeasyBase {
    /**
     * Fixed shipping cost to be charged in a decimal number.
     */
    absoluteMoneyCost: string;
    /**
     * Three letter ISO code for the country where the delivery will take place.
     */
    country: string;
    /**
     * Maximum volume that can be transported by the carrier in cm³.
     */
    maxVolume: number;
    /**
     * Indicates desired action for the object. Possible values are `1` (Insert), `2` (Update) or `3`(Delete).
     */
    operationType: number;
    /**
     * Polygon ID, according to the [geolocation](https://help.vtex.com/en/tutorial/registering-geolocation/) feature.
     */
    polygon: string;
    /**
     * [Price-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total price of the order, in decimal number. You must fill in this field with a percentage value. For example, for an additional charge of 10%, fill in the table with 10.
     */
    pricePercent: number;
    /**
     * [Weight-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total weight of the order.
     */
    pricePercentByWeight: number;
    /**
     * Delivery time frame informed by the carrier, in the format DD.HH:MM:SS.
     */
    timeCost: string;
    /**
     * Maximum weight allowed.
     */
    weightEnd: number;
    /**
     * Minimum weight allowed
     */
    weightStart: number;
    /**
     * End of postal code interval.
     */
    zipCodeEnd: string;
    /**
     * Start of postal code interval.
     */
    zipCodeStart: string;
}
export declare class CreateUpdateFreightValuesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: CreateUpdateFreightValuesCreateUpdateFreightValuesRequest[];
    carrierId: string;
}
export declare class CreateUpdateFreightValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
