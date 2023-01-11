import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsagePerUnitPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsagePerUnitPricingUpdate extends SpeakeasyBase {
    listPrice?: number;
    priceChangeOption?: UsagePerUnitPricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
}
