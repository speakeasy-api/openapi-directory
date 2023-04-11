import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetallRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    contentType: string;
}
/**
 * Object with information about the coupon.
 */
export declare class Getall200ApplicationJSON extends SpeakeasyBase {
    /**
     * Coupon code.
     */
    couponCode?: string;
    /**
     * Coupon expiration interval per use.
     */
    expirationIntervalPerUse?: string;
    /**
     * Defines if the coupon is archived (`true`) or not (`false`).
     */
    isArchived?: boolean;
    /**
     * Date and time of the last update of the coupon in UTC format.
     */
    lastModifiedUtc?: string;
    /**
     * Maximum items per client that the coupon can be applied.
     */
    maxItemsPerClient?: number;
    /**
     * UTM campaign code.
     */
    utmCampaign?: string;
    /**
     * UTM source code.
     */
    utmSource?: string;
}
export declare class GetallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getall200ApplicationJSONObjects?: Getall200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
