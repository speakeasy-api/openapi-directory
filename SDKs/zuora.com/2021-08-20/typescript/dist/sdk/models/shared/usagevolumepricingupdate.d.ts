import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum UsageVolumePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsageVolumePricingUpdate extends SpeakeasyBase {
    priceChangeOption?: UsageVolumePricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    tiers?: ChargeTier[];
}
