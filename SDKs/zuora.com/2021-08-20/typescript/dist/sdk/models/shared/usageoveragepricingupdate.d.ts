import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageOveragePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsageOveragePricingUpdate extends SpeakeasyBase {
    includedUnits?: number;
    overagePrice?: number;
    priceChangeOption?: UsageOveragePricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
}
