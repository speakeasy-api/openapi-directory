import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecurringFlatFeePricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}
export declare enum RecurringFlatFeePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 *
**/
export declare class RecurringFlatFeePricingOverride extends SpeakeasyBase {
    listPrice?: number;
    listPriceBase?: RecurringFlatFeePricingOverrideListPriceBaseEnum;
    priceChangeOption?: RecurringFlatFeePricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
}
