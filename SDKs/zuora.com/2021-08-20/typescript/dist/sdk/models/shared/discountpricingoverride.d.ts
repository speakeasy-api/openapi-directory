import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies which type of charge the discount charge applies to.
 *
 * @remarks
 *
 */
export declare enum DiscountPricingOverrideApplyDiscountToEnum {
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
export declare enum DiscountPricingOverrideDiscountLevelEnum {
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
export declare enum DiscountPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a discount charge.
 *
 * @remarks
 *
 */
export declare class DiscountPricingOverride extends SpeakeasyBase {
    /**
     * Specifies which type of charge the discount charge applies to.
     *
     * @remarks
     *
     */
    applyDiscountTo?: DiscountPricingOverrideApplyDiscountToEnum;
    /**
     * Only applicable if the discount charge is a fixed-amount discount.
     *
     * @remarks
     *
     */
    discountAmount?: number;
    /**
     * Application scope of the discount charge. For example, if the value of this field is `subscription` and the value of the `applyDiscountTo` field is `RECURRING`, the discount charge applies to all recurring charges in the same subscription as the discount charge.
     *
     * @remarks
     *
     */
    discountLevel?: DiscountPricingOverrideDiscountLevelEnum;
    /**
     * Only applicable if the discount charge is a percentage discount.
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
    priceChangeOption?: DiscountPricingOverridePriceChangeOptionEnum;
}
