import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Object that contains all coupon configuration.
 */
export declare class PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration extends SpeakeasyBase {
    /**
     * Coupon code.
     */
    couponCode: string;
    /**
     * Coupon expiration interval per use.
     */
    expirationIntervalPerUse: string;
    /**
     * Defines if the coupon is archived (`true`) or not (`false`).
     */
    isArchived?: boolean;
    /**
     * Maximum items per client that the coupon can be applied.
     */
    maxItemsPerClient: number;
    /**
     * utmCampaign code.
     */
    utmCampaign: string;
    /**
     * utmSource code.
     */
    utmSource: string;
}
export declare class PostApiRnbPvtMultipleCouponsRequestBody extends SpeakeasyBase {
    /**
     * Object that contains all coupon configuration.
     */
    couponConfiguration: PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration;
    /**
     * Quantity of coupons created. The value must be a minimum of `1` and at maximum `1000`. If the amount is `1`, the coupon code will be the value of the `couponCode` parameter. If the value is greater than `1`, the coupon code will receive a random suffix.
     */
    quantity: number;
}
export declare class PostApiRnbPvtMultipleCouponsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: PostApiRnbPvtMultipleCouponsRequestBody[];
}
export declare class PostApiRnbPvtMultipleCouponsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    items?: string[];
}
