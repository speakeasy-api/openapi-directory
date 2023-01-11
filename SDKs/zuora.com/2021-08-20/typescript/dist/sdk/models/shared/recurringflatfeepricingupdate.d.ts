import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecurringFlatFeePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class RecurringFlatFeePricingUpdate extends SpeakeasyBase {
    listPrice?: number;
    priceChangeOption?: RecurringFlatFeePricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
}
