import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FreightValuesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    /**
     * Carrier ID
     */
    carrierId: string;
    /**
     * Postal code.
     */
    cep: string;
}
export declare class FreightValues200ApplicationJSON extends SpeakeasyBase {
    absoluteMoneyCost: number;
    country: string;
    maxVolume: number;
    minimumValueInsurance: number;
    operationType: number;
    polygon: string;
    pricePercent: number;
    pricePercentByWeight: number;
    restrictedFreights: string[];
    timeCost: string;
    weightEnd: number;
    weightStart: number;
    zipCodeEnd: string;
    zipCodeStart: string;
}
export declare class FreightValuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    freightValues200ApplicationJSONObjects?: FreightValues200ApplicationJSON[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
