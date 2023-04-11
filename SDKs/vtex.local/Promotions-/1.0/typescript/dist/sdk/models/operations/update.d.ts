import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRequestBody extends SpeakeasyBase {
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
    isArchived: boolean;
    /**
     * Maximum items per client that the coupon can be applied.
     */
    maxItemsPerClient: number;
    /**
     * UTM campaign code.
     */
    utmCampaign: string;
    /**
     * UTM source code.
     */
    utmSource: string;
}
export declare class UpdateRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: UpdateRequestBody;
}
/**
 * OK
 */
export declare class Update200ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    update200ApplicationJSONObject?: Update200ApplicationJSON;
}
