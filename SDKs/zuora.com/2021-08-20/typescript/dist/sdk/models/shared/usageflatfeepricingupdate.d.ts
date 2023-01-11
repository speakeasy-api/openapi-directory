import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageFlatFeePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsageFlatFeePricingUpdate extends SpeakeasyBase {
    listPrice?: number;
    priceChangeOption?: UsageFlatFeePricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
}
