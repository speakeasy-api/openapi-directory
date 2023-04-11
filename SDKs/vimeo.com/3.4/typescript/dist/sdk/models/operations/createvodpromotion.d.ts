import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVodPromotionSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The promotion access type, which is a purchase option that isn't available on the container. VIP promotions always make the content free of charge. If you use this type, you must further define the promotion with the `download` or `stream_period` fields.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `default` - Promotions grant discount on the existing purchase options for an On Demand Container.
 *  * `vip` - Promotions can be used to grant free access to VOD content before it is released, or to offer a purchase option that isn't available on the container. "vip" promotions will always make the content free, and must be further defined with the `download` or `stream_period` fields.
 *
 */
export declare enum CreateVodPromotionRequestBodyAccessTypeEnum {
    Default = "default",
    Vip = "vip"
}
/**
 * The type of discount offered by the promo code. When `access_type` is `vip`, the value of this field must be `free`.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `free` - Reduces the price to zero.
 *  * `percent` - Reduces the price by an amount defined in the "percent_off" field.
 *
 */
export declare enum CreateVodPromotionRequestBodyDiscountTypeEnum {
    Free = "free",
    Percent = "percent"
}
/**
 * The type of transaction to which the promotion applies. When `access_type` is `default`, the default value is `any`, but the default value is `rent` when `access_type` is `vip`. Also, when `access_type` is `vip`, the only valid product types are `buy` and `rent`.
 */
export declare enum CreateVodPromotionRequestBodyProductTypeEnum {
    Any = "any",
    Buy = "buy",
    BuyEpisode = "buy_episode",
    Rent = "rent",
    RentEpisode = "rent_episode",
    Subscribe = "subscribe"
}
/**
 * The amount of time that a user has access to the VOD content upon redeeming a promo code. This field is necessary only when not defined in the On Demand container or when creating promotions when `access_type` is `vip` or `product_type` is `rent`.
 */
export declare enum CreateVodPromotionRequestBodyStreamPeriodEnum {
    OneWeek = "1_week",
    OneYear = "1_year",
    TwentyFourHour = "24_hour",
    ThirtyDay = "30_day",
    ThreeMonth = "3_month",
    FortyEightHour = "48_hour",
    SixMonth = "6_month",
    SeventyTwoHour = "72_hour"
}
/**
 * The type of promotion. When `access_type` is `vip`, the value for this field must be `batch`.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `batch` - Generates many random promo codes with one use each.
 *  * `single` - Generates one promo code that can be used many times.
 *
 */
export declare enum CreateVodPromotionRequestBodyTypeEnum {
    Batch = "batch",
    Single = "single"
}
export declare class CreateVodPromotionRequestBody extends SpeakeasyBase {
    /**
     * The promotion access type, which is a purchase option that isn't available on the container. VIP promotions always make the content free of charge. If you use this type, you must further define the promotion with the `download` or `stream_period` fields.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `default` - Promotions grant discount on the existing purchase options for an On Demand Container.
     *  * `vip` - Promotions can be used to grant free access to VOD content before it is released, or to offer a purchase option that isn't available on the container. "vip" promotions will always make the content free, and must be further defined with the `download` or `stream_period` fields.
     *
     */
    accessType?: CreateVodPromotionRequestBodyAccessTypeEnum;
    /**
     * The promotion code. This field is ignored for batch promotions.
     */
    code?: string;
    /**
     * The type of discount offered by the promo code. When `access_type` is `vip`, the value of this field must be `free`.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `free` - Reduces the price to zero.
     *  * `percent` - Reduces the price by an amount defined in the "percent_off" field.
     *
     */
    discountType?: CreateVodPromotionRequestBodyDiscountTypeEnum;
    /**
     * Whether the promotion grants download access to VOD content. This is necessary only when not previously defined in the On Demand container or when `access_type` is `vip` or `product_type` is `buy`.
     */
    download: boolean;
    /**
     * The end of the promotion period. If you don't specify a value, the promotion will never expire.
     */
    endTime?: string;
    /**
     * The description of a batch promotion. This field is ignored for single promotions.
     */
    label?: string;
    /**
     * The percentage of the discount by using this promo code. This field is applicable only when `discount_type` is `percent`.
     */
    percentOff?: number;
    /**
     * The type of transaction to which the promotion applies. When `access_type` is `default`, the default value is `any`, but the default value is `rent` when `access_type` is `vip`. Also, when `access_type` is `vip`, the only valid product types are `buy` and `rent`.
     */
    productType?: CreateVodPromotionRequestBodyProductTypeEnum;
    /**
     * The start of the promotion period. If you don't specify a value, the start time defaults to the time that the promotion was created.
     */
    startTime?: string;
    /**
     * The amount of time that a user has access to the VOD content upon redeeming a promo code. This field is necessary only when not defined in the On Demand container or when creating promotions when `access_type` is `vip` or `product_type` is `rent`.
     */
    streamPeriod: CreateVodPromotionRequestBodyStreamPeriodEnum;
    /**
     * The number of promotions to generate when `type` is `batch`, or the number of uses of the promotion when `type` is `single`.
     */
    total: number;
    /**
     * The type of promotion. When `access_type` is `vip`, the value for this field must be `batch`.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `batch` - Generates many random promo codes with one use each.
     *  * `single` - Generates one promo code that can be used many times.
     *
     */
    type: CreateVodPromotionRequestBodyTypeEnum;
}
export declare class CreateVodPromotionRequest extends SpeakeasyBase {
    requestBody: CreateVodPromotionRequestBody;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class CreateVodPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * There are errors in the request.
     *
     * @remarks
     * * The promo code already exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The promotion was added.
     */
    onDemandPromotion?: shared.OnDemandPromotion;
}
