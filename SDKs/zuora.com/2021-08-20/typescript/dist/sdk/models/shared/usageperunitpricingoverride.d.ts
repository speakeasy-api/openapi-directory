import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how Zuora changes the price of the charge each time the subscription renews.
 *
 * @remarks
 *
 * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
 *
 */
export declare enum UsagePerUnitPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Specifies how Zuora groups usage records when rating usage. See [Usage Rating by Group](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Usage/Usage_Rating_by_Group) for more information.
 *
 * @remarks
 *   * ByBillingPeriod (default): The rating is based on all the usages in a billing period.
 *   * ByUsageStartDate: The rating is based on all the usages on the same usage start date.
 *   * ByUsageRecord: The rating is based on each usage record.
 *   * ByUsageUpload: The rating is based on all the usages in a uploaded usage file (.xls or .csv). If you import a mass usage in a single upload, which contains multiple usage files in .xls or .csv format, usage records are grouped for each usage file.
 *
 */
export declare enum UsagePerUnitPricingOverrideRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload"
}
/**
 * Pricing information about a usage charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit consumed.
 *
 * @remarks
 *
 */
export declare class UsagePerUnitPricingOverride extends SpeakeasyBase {
    /**
     * Per-unit price of the charge.
     *
     * @remarks
     *
     */
    listPrice?: number;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: UsagePerUnitPricingOverridePriceChangeOptionEnum;
    /**
     * Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
    /**
     * Specifies how Zuora groups usage records when rating usage. See [Usage Rating by Group](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Usage/Usage_Rating_by_Group) for more information.
     *
     * @remarks
     *   * ByBillingPeriod (default): The rating is based on all the usages in a billing period.
     *   * ByUsageStartDate: The rating is based on all the usages on the same usage start date.
     *   * ByUsageRecord: The rating is based on each usage record.
     *   * ByUsageUpload: The rating is based on all the usages in a uploaded usage file (.xls or .csv). If you import a mass usage in a single upload, which contains multiple usage files in .xls or .csv format, usage records are grouped for each usage file.
     *
     */
    ratingGroup?: UsagePerUnitPricingOverrideRatingGroupEnum;
}
