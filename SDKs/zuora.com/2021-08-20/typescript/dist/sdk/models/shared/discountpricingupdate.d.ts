import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies which type of charge the discount charge applies to.
 *
 * @remarks
 *
 */
export declare enum DiscountPricingUpdateApplyDiscountToEnum {
    Onetime = "ONETIME",
    Recurring = "RECURRING",
    Usage = "USAGE",
    Onetimerecurring = "ONETIMERECURRING",
    Onetimeusage = "ONETIMEUSAGE",
    Recurringusage = "RECURRINGUSAGE",
    Onetimerecurringusage = "ONETIMERECURRINGUSAGE"
}
/**
 * Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.
 *
 * @remarks
 *
 */
export declare enum DiscountPricingUpdateDiscountLevelEnum {
    Rateplan = "rateplan",
    Subscription = "subscription",
    Account = "account"
}
/**
 * Specifies how Zuora changes the price of the charge each time the subscription renews.
 *
 * @remarks
 *
 */
export declare enum DiscountPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class DiscountPricingUpdate extends SpeakeasyBase {
    /**
     * Specifies which type of charge the discount charge applies to.
     *
     * @remarks
     *
     */
    applyDiscountTo?: DiscountPricingUpdateApplyDiscountToEnum;
    /**
     * Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.
     *
     * @remarks
     *
     */
    discountLevel?: DiscountPricingUpdateDiscountLevelEnum;
    /**
     * The amount of the discount as a percentage. This field is only used for percentage discounts.
     *
     * @remarks
     *
     */
    discountPercentage?: number;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     */
    priceChangeOption?: DiscountPricingUpdatePriceChangeOptionEnum;
}
