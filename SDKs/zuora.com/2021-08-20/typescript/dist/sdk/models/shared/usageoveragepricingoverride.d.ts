import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum {
    NoCredit = "NoCredit",
    CreditBySpecificRate = "CreditBySpecificRate"
}
export declare enum UsageOveragePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
 *
**/
export declare class UsageOveragePricingOverride extends SpeakeasyBase {
    includedUnits?: number;
    numberOfPeriods?: number;
    overagePrice?: number;
    overageUnusedUnitsCreditOption?: UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;
    priceChangeOption?: UsageOveragePricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    unusedUnitsCreditRates?: number;
}
