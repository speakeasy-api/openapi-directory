import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecurringPerUnitPricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}
export declare enum RecurringPerUnitPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
 *
**/
export declare class RecurringPerUnitPricingOverride extends SpeakeasyBase {
    listPrice?: number;
    listPriceBase?: RecurringPerUnitPricingOverrideListPriceBaseEnum;
    priceChangeOption?: RecurringPerUnitPricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    quantity?: number;
}
