import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageFlatFeePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a usage charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 *
**/
export declare class UsageFlatFeePricingOverride extends SpeakeasyBase {
    listPrice?: number;
    priceChangeOption?: UsageFlatFeePricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
}
