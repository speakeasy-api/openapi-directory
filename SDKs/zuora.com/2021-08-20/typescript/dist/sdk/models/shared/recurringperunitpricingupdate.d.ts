import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecurringPerUnitPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class RecurringPerUnitPricingUpdate extends SpeakeasyBase {
    listPrice?: number;
    priceChangeOption?: RecurringPerUnitPricingUpdatePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    quantity?: number;
}
