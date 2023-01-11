import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiscountPricingUpdateApplyDiscountToEnum {
    Onetime = "ONETIME",
    Recurring = "RECURRING",
    Usage = "USAGE",
    Onetimerecurring = "ONETIMERECURRING",
    Onetimeusage = "ONETIMEUSAGE",
    Recurringusage = "RECURRINGUSAGE",
    Onetimerecurringusage = "ONETIMERECURRINGUSAGE"
}

export enum DiscountPricingUpdateDiscountLevelEnum {
    Rateplan = "rateplan",
    Subscription = "subscription",
    Account = "account"
}

export enum DiscountPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


export class DiscountPricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyDiscountTo" })
  applyDiscountTo?: DiscountPricingUpdateApplyDiscountToEnum;

  @SpeakeasyMetadata({ data: "json, name=discountLevel" })
  discountLevel?: DiscountPricingUpdateDiscountLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: DiscountPricingUpdatePriceChangeOptionEnum;
}
