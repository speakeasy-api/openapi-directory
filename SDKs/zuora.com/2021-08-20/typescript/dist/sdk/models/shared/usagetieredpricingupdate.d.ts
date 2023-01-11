import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum UsageTieredPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsageTieredPricingUpdate extends SpeakeasyBase {
    priceChangeOption?: UsageTieredPricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    tiers?: ChargeTier[];
}
