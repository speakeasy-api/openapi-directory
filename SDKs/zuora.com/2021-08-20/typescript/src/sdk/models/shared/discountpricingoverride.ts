import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiscountPricingOverrideApplyDiscountToEnum {
    Onetime = "ONETIME",
    Recurring = "RECURRING",
    Usage = "USAGE",
    Onetimerecurring = "ONETIMERECURRING",
    Onetimeusage = "ONETIMEUSAGE",
    Recurringusage = "RECURRINGUSAGE",
    Onetimerecurringusage = "ONETIMERECURRINGUSAGE"
}

export enum DiscountPricingOverrideDiscountLevelEnum {
    Rateplan = "rateplan",
    Subscription = "subscription",
    Account = "account"
}

export enum DiscountPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// DiscountPricingOverride
/** 
 * Pricing information about a discount charge.
 * 
**/
export class DiscountPricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyDiscountTo" })
  applyDiscountTo?: DiscountPricingOverrideApplyDiscountToEnum;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountLevel" })
  discountLevel?: DiscountPricingOverrideDiscountLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: DiscountPricingOverridePriceChangeOptionEnum;
}
