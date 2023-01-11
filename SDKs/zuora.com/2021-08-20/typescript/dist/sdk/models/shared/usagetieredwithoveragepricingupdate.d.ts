import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsageTieredWithOveragePricingUpdate extends SpeakeasyBase {
    overagePrice?: number;
    priceChangeOption?: UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    tiers?: ChargeTier[];
}
