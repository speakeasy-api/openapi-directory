import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum RecurringVolumePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class RecurringVolumePricingUpdate extends SpeakeasyBase {
    priceChangeOption?: RecurringVolumePricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    quantity?: number;
    tiers?: ChargeTier[];
}
