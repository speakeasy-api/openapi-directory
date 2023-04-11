import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Specifies how Zuora changes the price of the charge each time the subscription renews.
 *
 * @remarks
 *
 * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
 *
 */
export declare enum UsageVolumePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare class UsageVolumePricingUpdate extends SpeakeasyBase {
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: UsageVolumePricingUpdatePriceChangeOptionEnum;
    /**
     * Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
    tiers?: ChargeTier[];
}
