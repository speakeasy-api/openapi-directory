import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum {
    NoCredit = "NoCredit",
    CreditBySpecificRate = "CreditBySpecificRate"
}
export declare enum UsageTieredWithOveragePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a usage charge that uses the "tiered with overage" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
 *
**/
export declare class UsageTieredWithOveragePricingOverride extends SpeakeasyBase {
    numberOfPeriods?: number;
    overagePrice?: number;
    overageUnusedUnitsCreditOption?: UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;
    priceChangeOption?: UsageTieredWithOveragePricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    tiers?: ChargeTier[];
    unusedUnitsCreditRates?: number;
}
