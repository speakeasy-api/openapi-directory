import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of access that this promotion grants:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `default` - Grants discounts on existing product offerings.
 *  * `vip` - Grants free access either to VOD content before it is released or to access types that aren't part of the existing product offerings.
 *
 */
export declare enum OnDemandPromotionAccessTypeEnum {
    Default = "default",
    Vip = "vip"
}
/**
 * The type of discount for which this promotion can be used.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `dollars` - The discount is a certain fixed amount.
 *  * `free` - The discount is the full purchase price. VIP access promotions always use this discount type.
 *  * `percent` - The discount is a certain percentage of the full price.
 *
 */
export declare enum OnDemandPromotionDiscountTypeEnum {
    Dollars = "dollars",
    Free = "free",
    Percent = "percent"
}
/**
 * Information about the codes associated with this promotion.
 */
export declare class OnDemandPromotionMetadataConnectionsCodes extends SpeakeasyBase {
    /**
     * An array of HTTP methods permitted on this URI.
     */
    options: string[];
    /**
     * The total number of uses on this connection.
     */
    total: number;
    /**
     * The API URI that resolves to the connection data.
     */
    uri: string;
}
/**
 * A list of resource URIs related to the On Demand promotion.
 */
export declare class OnDemandPromotionMetadataConnections extends SpeakeasyBase {
    /**
     * Information about the codes associated with this promotion.
     */
    codes: OnDemandPromotionMetadataConnectionsCodes;
}
/**
 * The video's metadata.
 */
export declare class OnDemandPromotionMetadata extends SpeakeasyBase {
    /**
     * A list of resource URIs related to the On Demand promotion.
     */
    connections: OnDemandPromotionMetadataConnections;
}
/**
 * The type of product to which this promotion can be applied. Only `buy` and `rent` are available for the VIP access type:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `any` - The promotion can be applied to any product.
 *  * `buy` - The promotion can be applied to a buyable single video.
 *  * `buy_episode` - The promotion can be applied to a buyable single episode.
 *  * `rent` - The promotion can be applied to a rentable single video.
 *  * `rent_episode` - The promotion can be applied to a rentable single episode.
 *  * `subscribe` - The promotion can be applied to a subscription.
 *
 */
export declare enum OnDemandPromotionProductTypeEnum {
    Any = "any",
    Buy = "buy",
    BuyEpisode = "buy_episode",
    Rent = "rent",
    RentEpisode = "rent_episode",
    Subscribe = "subscribe"
}
/**
 * The amount of time that the user has access to the VOD content after redeeming a promo code.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `1_week` - Access lasts for one week.
 *  * `1_year` - Access lasts for one year.
 *  * `24_hour` - Access lasts for 24 hours.
 *  * `30_days` - Access lasts for 30 days.
 *  * `3_month` - Access lasts for 3 months.
 *  * `48_hour` - Access lasts for 48 hours.
 *  * `6_month` - Access lasts for 6 months.
 *  * `72_hour` - Access lasts for 72 hours.
 *
 */
export declare enum OnDemandPromotionStreamPeriodEnum {
    OneWeek = "1_week",
    OneYear = "1_year",
    TwentyFourHour = "24_hour",
    ThirtyDays = "30_days",
    ThreeMonth = "3_month",
    FortyEightHour = "48_hour",
    SixMonth = "6_month",
    SeventyTwoHour = "72_hour"
}
/**
 * The way in which this promotion can generate promo codes:
 *
 * @remarks
 *
 * Option descriptions:
 *  * `batch` - Provides many unique promo codes that can only be used once each.
 *  * `batch_prefix` - Similar to `batch`, except that all codes have a similar prefix string. This mode is deprecated, yet it may still appear for some users.
 *  * `single` - Provides a single promo code with many uses.
 *
 */
export declare enum OnDemandPromotionTypeEnum {
    Batch = "batch",
    BatchPrefix = "batch_prefix",
    Single = "single"
}
/**
 * The promotions were returned.
 */
export declare class OnDemandPromotion extends SpeakeasyBase {
    /**
     * The type of access that this promotion grants:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `default` - Grants discounts on existing product offerings.
     *  * `vip` - Grants free access either to VOD content before it is released or to access types that aren't part of the existing product offerings.
     *
     */
    accessType: OnDemandPromotionAccessTypeEnum;
    /**
     * The type of discount for which this promotion can be used.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `dollars` - The discount is a certain fixed amount.
     *  * `free` - The discount is the full purchase price. VIP access promotions always use this discount type.
     *  * `percent` - The discount is a certain percentage of the full price.
     *
     */
    discountType: OnDemandPromotionDiscountTypeEnum;
    /**
     * Whether this promotion grants download access to On Demand content.
     */
    download: boolean;
    /**
     * The prefix string for batch codes, or the null value for single codes.
     */
    label: string;
    /**
     * The video's metadata.
     */
    metadata: OnDemandPromotionMetadata;
    /**
     * The percentage amount that is deducted from the product price.
     */
    percentOff: number;
    /**
     * The type of product to which this promotion can be applied. Only `buy` and `rent` are available for the VIP access type:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `any` - The promotion can be applied to any product.
     *  * `buy` - The promotion can be applied to a buyable single video.
     *  * `buy_episode` - The promotion can be applied to a buyable single episode.
     *  * `rent` - The promotion can be applied to a rentable single video.
     *  * `rent_episode` - The promotion can be applied to a rentable single episode.
     *  * `subscribe` - The promotion can be applied to a subscription.
     *
     */
    productType: OnDemandPromotionProductTypeEnum;
    /**
     * The amount of time that the user has access to the VOD content after redeeming a promo code.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `1_week` - Access lasts for one week.
     *  * `1_year` - Access lasts for one year.
     *  * `24_hour` - Access lasts for 24 hours.
     *  * `30_days` - Access lasts for 30 days.
     *  * `3_month` - Access lasts for 3 months.
     *  * `48_hour` - Access lasts for 48 hours.
     *  * `6_month` - Access lasts for 6 months.
     *  * `72_hour` - Access lasts for 72 hours.
     *
     */
    streamPeriod: OnDemandPromotionStreamPeriodEnum;
    /**
     * The total amount of times that this promotion can be used.
     */
    total: number;
    /**
     * The way in which this promotion can generate promo codes:
     *
     * @remarks
     *
     * Option descriptions:
     *  * `batch` - Provides many unique promo codes that can only be used once each.
     *  * `batch_prefix` - Similar to `batch`, except that all codes have a similar prefix string. This mode is deprecated, yet it may still appear for some users.
     *  * `single` - Provides a single promo code with many uses.
     *
     */
    type: OnDemandPromotionTypeEnum;
    /**
     * The promotion's canonical relative URI.
     */
    uri: string;
}
