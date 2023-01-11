import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiscountPricingOverrideApplyDiscountToEnum {
    Onetime = "ONETIME",
    Recurring = "RECURRING",
    Usage = "USAGE",
    Onetimerecurring = "ONETIMERECURRING",
    Onetimeusage = "ONETIMEUSAGE",
    Recurringusage = "RECURRINGUSAGE",
    Onetimerecurringusage = "ONETIMERECURRINGUSAGE"
}
export declare enum DiscountPricingOverrideDiscountLevelEnum {
    Rateplan = "rateplan",
    Subscription = "subscription",
    Account = "account"
}
export declare enum DiscountPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a discount charge.
 *
**/
export declare class DiscountPricingOverride extends SpeakeasyBase {
    applyDiscountTo?: DiscountPricingOverrideApplyDiscountToEnum;
    discountAmount?: number;
    discountLevel?: DiscountPricingOverrideDiscountLevelEnum;
    discountPercentage?: number;
    priceChangeOption?: DiscountPricingOverridePriceChangeOptionEnum;
}
