import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on purchasing this video.
 */
export declare class PurchaseInteractionBuy extends SpeakeasyBase {
    /**
     * Whether the On Demand video for purchase has DRM.
     */
    drm?: boolean;
}
/**
 * The user's streaming access to this On Demand subscription:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `available` - The On Demand subscription is available for streaming.
 *  * `purchased` - The On Demand subscription has been purchased.
 *  * `restricted` - Streaming for the On Demand subscription is restricted.
 *  * `unavailable` - The On Demand subscription is unavailable.
 *
 */
export declare enum PurchaseInteractionSubscribeStreamEnum {
    Available = "available",
    Purchased = "purchased",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
/**
 * Information on subscribing to this video.
 */
export declare class PurchaseInteractionSubscribe extends SpeakeasyBase {
    /**
     * Whether the On Demand subscription has DRM.
     */
    drm?: boolean;
    /**
     * The time in ISO 8601 format when the On Demand video will expire.
     */
    expiresTime?: string;
    /**
     * The URL to purchase this On Demand subscription on Vimeo.
     */
    link?: string;
    /**
     * The time in ISO 8601 format when the On Demand was purchased.
     */
    purchaseTime?: string;
    /**
     * The user's streaming access to this On Demand subscription:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `available` - The On Demand subscription is available for streaming.
     *  * `purchased` - The On Demand subscription has been purchased.
     *  * `restricted` - Streaming for the On Demand subscription is restricted.
     *  * `unavailable` - The On Demand subscription is unavailable.
     *
     */
    stream?: PurchaseInteractionSubscribeStreamEnum;
    /**
     * The On Demand subscription's product URI.
     */
    uri?: string;
}
export declare class PurchaseInteraction extends SpeakeasyBase {
    /**
     * Information on purchasing this video.
     */
    buy?: PurchaseInteractionBuy;
    /**
     * Information on renting this video.
     */
    rent?: Record<string, any>;
    /**
     * Information on subscribing to this video.
     */
    subscribe?: PurchaseInteractionSubscribe;
}
