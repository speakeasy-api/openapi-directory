import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum RecurringVolumePricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}
export declare enum RecurringVolumePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 *
**/
export declare class RecurringVolumePricingOverride extends SpeakeasyBase {
    listPriceBase?: RecurringVolumePricingOverrideListPriceBaseEnum;
    priceChangeOption?: RecurringVolumePricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    quantity?: number;
    tiers?: ChargeTier[];
}
