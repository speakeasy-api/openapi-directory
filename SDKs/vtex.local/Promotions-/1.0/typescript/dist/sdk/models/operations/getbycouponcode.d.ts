import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetbycouponcodeRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Coupon Code
     */
    couponCode: string;
}
/**
 * OK
 */
export declare class Getbycouponcode200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetbycouponcodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getbycouponcode200ApplicationJSONObject?: Getbycouponcode200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
