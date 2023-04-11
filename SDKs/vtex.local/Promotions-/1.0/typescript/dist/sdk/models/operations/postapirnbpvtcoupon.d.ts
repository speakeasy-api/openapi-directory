import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiRnbPvtCouponRequestBody extends SpeakeasyBase {
    /**
     * Coupon code.
     */
    couponCode: string;
    /**
     * Coupon expiration interval per use.
     */
    expirationIntervalPerUse: string;
    /**
     * Maximum items per client that the coupon can be applied.
     */
    maxItemsPerClient: number;
    /**
     * UTM campaign code.
     */
    utmCampaign?: string;
    /**
     * UTM source code.
     */
    utmSource: string;
}
export declare class PostApiRnbPvtCouponRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: PostApiRnbPvtCouponRequestBody;
}
/**
 * Created
 */
export declare class PostApiRnbPvtCoupon201ApplicationJSON extends SpeakeasyBase {
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
export declare class PostApiRnbPvtCouponResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    postApiRnbPvtCoupon201ApplicationJSONObject?: PostApiRnbPvtCoupon201ApplicationJSON;
}
