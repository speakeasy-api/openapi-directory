import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiscountPricingUpdateApplyDiscountToEnum {
    Onetime = "ONETIME",
    Recurring = "RECURRING",
    Usage = "USAGE",
    Onetimerecurring = "ONETIMERECURRING",
    Onetimeusage = "ONETIMEUSAGE",
    Recurringusage = "RECURRINGUSAGE",
    Onetimerecurringusage = "ONETIMERECURRINGUSAGE"
}
export declare enum DiscountPricingUpdateDiscountLevelEnum {
    Rateplan = "rateplan",
    Subscription = "subscription",
    Account = "account"
}
export declare enum DiscountPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class DiscountPricingUpdate extends SpeakeasyBase {
    applyDiscountTo?: DiscountPricingUpdateApplyDiscountToEnum;
    discountLevel?: DiscountPricingUpdateDiscountLevelEnum;
    discountPercentage?: number;
    priceChangeOption?: DiscountPricingUpdatePriceChangeOptionEnum;
}
