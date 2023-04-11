import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetusageRequest extends SpeakeasyBase {
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
 * Object with information about the order that the coupon was used.
 */
export declare class Getusage200ApplicationJSONProfileUsagesProfileIdOrderUsage extends SpeakeasyBase {
    /**
     * Order ID.
     */
    orderId?: string;
    /**
     * Date and time when the coupon was used in the order in UTC format.
     */
    usageDateUtc?: string;
}
/**
 * Profile ID.
 */
export declare class Getusage200ApplicationJSONProfileUsagesProfileId extends SpeakeasyBase {
    /**
     * Array with all the orders that the coupon was used.
     */
    orderUsage?: Getusage200ApplicationJSONProfileUsagesProfileIdOrderUsage[];
}
/**
 * Object with information where and when the coupon was used.
 */
export declare class Getusage200ApplicationJSONProfileUsages extends SpeakeasyBase {
    /**
     * Profile ID.
     */
    profileId?: Getusage200ApplicationJSONProfileUsagesProfileId;
}
/**
 * OK
 */
export declare class Getusage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Coupon code.
     */
    couponCode?: string;
    /**
     * Name of the store.
     */
    hostName?: string;
    /**
     * Object with information where and when the coupon was used.
     */
    profileUsages?: Getusage200ApplicationJSONProfileUsages;
}
export declare class GetusageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getusage200ApplicationJSONObject?: Getusage200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
