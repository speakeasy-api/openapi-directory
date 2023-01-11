import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum RecurringTieredPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class RecurringTieredPricingUpdate extends SpeakeasyBase {
    priceChangeOption?: RecurringTieredPricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    quantity?: number;
    tiers?: ChargeTier[];
}
