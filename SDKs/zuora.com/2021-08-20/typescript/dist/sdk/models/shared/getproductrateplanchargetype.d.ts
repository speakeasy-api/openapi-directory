import { SpeakeasyBase } from "../../../internal/utils";
import { GETProductDiscountApplyDetailsType } from "./getproductdiscountapplydetailstype";
import { GETProductRatePlanChargePricingType } from "./getproductrateplanchargepricingtype";
/**
 * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanChargeTypeIncludeChildrenNSEnum {
    Yes = "Yes",
    No = "No"
}
/**
 * Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanChargeTypeItemTypeNSEnum {
    Inventory = "Inventory",
    NonInventory = "Non Inventory",
    Service = "Service"
}
/**
 * End date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanChargeTypeRevRecEndNSEnum {
    ChargePeriodStart = "Charge Period Start",
    RevRecTriggerDate = "Rev Rec Trigger Date",
    UseNetSuiteRevRecTemplate = "Use NetSuite Rev Rec Template"
}
/**
 * Start date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanChargeTypeRevRecStartNSEnum {
    ChargePeriodStart = "Charge Period Start",
    RevRecTriggerDate = "Rev Rec Trigger Date",
    UseNetSuiteRevRecTemplate = "Use NetSuite Rev Rec Template"
}
/**
 * Container for finance information of a rate plan charge.
 *
 * @remarks
 *
 */
export declare class GETProductRatePlanChargeTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for adjustment liability.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    adjustmentLiabilityAccountingCode?: string;
    /**
     * The type associated with the adjustment liability accounting code.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    adjustmentLiabilityAccountingCodeType?: string;
    /**
     * The accounting code for adjustment revenue.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    adjustmentRevenueAccountingCode?: string;
    /**
     * The type associated with the adjustment revenue accounting code.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    adjustmentRevenueAccountingCodeType?: string;
    /**
     * The accounting code for contract asset.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    contractAssetAccountingCode?: string;
    /**
     * The type associated with the contract asset accounting code.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    contractAssetAccountingCodeType?: string;
    /**
     * The accounting code for contract liability.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    contractLiabilityAccountingCode?: string;
    /**
     * The type associated with the contract liability accounting code.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    contractLiabilityAccountingCodeType?: string;
    /**
     * The accounting code for contract recognized revenue.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    contractRecognizedRevenueAccountingCode?: string;
    /**
     * The type associated with the contract recognized revenue accounting code.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    contractRecognizedRevenueAccountingCodeType?: string;
    /**
     * The accounting code for deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The type associated with the deferred revenue accounting code, such as Deferred Revenue.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCodeType?: string;
    /**
     * The accounting code for recognized revenue, such as Monthly Recurring Charges or Overage Charges.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The type associated with the recognized revenue accounting code, such as Sales Revenue or Sales Discount.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCodeType?: string;
    /**
     * The accounting code for unbilled receivables.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    unbilledReceivablesAccountingCode?: string;
    /**
     * The type associated with the unbilled receivables accounting code.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the RevPro Integration feature enabled.
     *
     */
    unbilledReceivablesAccountingCodeType?: string;
}
/**
 * Specifies when revenue recognition begins.
 *
 * @remarks
 *
 */
export declare enum GETProductRatePlanChargeTypeRevRecTriggerConditionEnum {
    ContractEffectiveDate = "ContractEffectiveDate",
    ServiceActivationDate = "ServiceActivationDate",
    CustomerAcceptanceDate = "CustomerAcceptanceDate"
}
/**
 * Container for custom fields of a Product Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class GETProductRatePlanChargeType extends SpeakeasyBase {
    /**
     * Class associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    classNS?: string;
    /**
     * Deferrred revenue account associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    deferredRevAccountNS?: string;
    /**
     * Department associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    departmentNS?: string;
    /**
     * Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    includeChildrenNS?: GETProductRatePlanChargeTypeIncludeChildrenNSEnum;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the product rate plan charge's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    itemTypeNS?: GETProductRatePlanChargeTypeItemTypeNSEnum;
    /**
     * Location associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    locationNS?: string;
    /**
     * Recognized revenue account associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    recognizedRevAccountNS?: string;
    /**
     * End date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecEndNS?: GETProductRatePlanChargeTypeRevRecEndNSEnum;
    /**
     * Start date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecStartNS?: GETProductRatePlanChargeTypeRevRecStartNSEnum;
    /**
     * Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    revRecTemplateTypeNS?: string;
    /**
     * Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    subsidiaryNS?: string;
    /**
     * Date when the product rate plan charge was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Specifies where (to what charge type) the discount will be applied. These field values are case-sensitive.
     *
     * @remarks
     *
     * Permissible values:
     * - RECURRING
     * - USAGE
     * - ONETIMERECURRING
     * - ONETIMEUSAGE
     * - RECURRINGUSAGE
     * - ONETIMERECURRINGUSAGE
     *
     */
    applyDiscountTo?: string;
    /**
     * The bill cycle day (BCD) for the charge. The BCD determines which day of the month or week the customer is billed. The BCD value in the account can override the BCD in this object.
     *
     * @remarks
     *
     */
    billingDay?: string;
    /**
     * The billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).
     *
     * @remarks
     *
     * Values:
     * - Month
     * - Quarter
     * - Annual
     * - Semi-Annual
     * - Specific Months
     * - Week
     * - Specific_Weeks
     *
     */
    billingPeriod?: string;
    /**
     * Aligns charges within the same subscription if multiple charges begin on different dates.
     *
     * @remarks
     *
     * Possible values:
     * - AlignToCharge
     * - AlignToSubscriptionStart
     * - AlignToTermStart
     *
     */
    billingPeriodAlignment?: string;
    /**
     * The billing timing for the charge. You can choose to bill for charges in advance or in arrears.
     *
     * @remarks
     *
     * Values:
     * - In Advance
     * - In Arrears
     *
     * **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).
     *
     */
    billingTiming?: string;
    /**
     * This field is for Zuora Internal Use only. See the **pricing** field for the same information as this field.
     */
    chargeModelConfigurations?: Record<string, any>;
    /**
     * The default quantity of units.  This field is required if you use a per-unit charge model.
     *
     * @remarks
     *
     */
    defaultQuantity?: string;
    /**
     * Usually a brief line item summary of the Rate Plan Charge.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The class that the discount belongs to. The discount class defines the order in which discount product rate plan charges are applied.
     *
     * @remarks
     *
     * For more information, see [Manage Discount Classes](https://knowledgecenter.zuora.com/BC_Subscription_Management/Product_Catalog/B_Charge_Models/Manage_Discount_Classes).
     *
     */
    discountClass?: string;
    /**
     * The level of the discount.
     *
     * @remarks
     *
     * Values:
     * - RatePlan
     * - Subscription
     * - Account
     *
     */
    discountLevel?: string;
    /**
     * Defines when the charge ends after the charge trigger date. If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.
     *
     * @remarks
     *
     * Values:
     * - Subscription_End
     * - Fixed_Period
     *
     */
    endDateCondition?: string;
    /**
     * Container for finance information of a rate plan charge.
     *
     * @remarks
     *
     */
    financeInformation?: GETProductRatePlanChargeTypeFinanceInformation;
    /**
     * The pricing formula to calculate the actual rating amount for each usage record.
     *
     * @remarks
     *
     * This field is only available for the usage-based charges that use the Multi-Attribute Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    formula?: string;
    /**
     * Unique product rate-plan charge ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Specifies the number of units in the base set of units when the charge model is Overage.
     *
     * @remarks
     *
     */
    includedUnits?: string;
    /**
     * The list price base for the product rate plan charge.
     *
     * @remarks
     *
     * Values:
     * - Month
     * - Billing Period
     * - Per_Week
     *
     */
    listPriceBase?: string;
    /**
     * Specifies the maximum number of units for this charge. Use this field and the `minQuantity` field to create a range of units allowed in a product rate plan charge.
     *
     * @remarks
     *
     */
    maxQuantity?: string;
    /**
     * Specifies the minimum number of units for this charge. Use this field and the `maxQuantity` field to create a range of units allowed in a product rate plan charge.
     *
     * @remarks
     *
     */
    minQuantity?: string;
    /**
     * Charge model which determines how charges are calculated. Charge models must be individually activated in Zuora Billing administration.
     *
     * @remarks
     *
     * Possible values are:
     * - `FlatFee`
     * - `PerUnit`
     * - `Overage`
     * - `Volume`
     * - `Tiered`
     * - `TieredWithOverage`
     * - `DiscountFixedAmount`
     * - `DiscountPercentage`
     * - `MultiAttributePricing` (available only if you have the Multi-Attribute Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `PreratedPerUnit` (available only if you have the Pre-rated Per Unit Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `PreratedPricing` (available only if you have the Pre-rated Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `HighWatermarkVolumePricing` (available only if you have the High Water Mark Volume Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     * - `HighWatermarkTieredPricing` (available only if you have the High Water Mark Tiered Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.)
     *
     * The value of the `pricing` field contains details about these charge models and the value of `pricingSummary` field contains their associated pricing summary values.
     *
     */
    model?: string;
    /**
     * Name of the product rate-plan charge. (Not required to be unique.)
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Value specifies the number of periods used in the smoothing model calculations Used when overage smoothing model is `RollingWindow` or `Rollover`.
     *
     * @remarks
     *
     */
    numberOfPeriods?: number;
    /**
     * Value specifies when to calculate overage charges.
     *
     * @remarks
     *
     * Values:
     * - EndOfSmoothingPeriod
     * - PerBillingPeriod
     *
     */
    overageCalculationOption?: string;
    /**
     * Determines whether to credit the customer with unused units of usage.
     *
     * @remarks
     *
     * Values:
     * - NoCredit
     * - CreditBySpecificRate
     *
     */
    overageUnusedUnitsCreditOption?: string;
    /**
     * The number of periods to which prepayment is set.
     *
     * @remarks
     *
     * **Note:** This field is only available if you already have the prepayment feature enabled. The prepayment feature is deprecated and available only for backward compatibility. Zuora does not support enabling this feature anymore.
     *
     */
    prepayPeriods?: number;
    /**
     * Applies an automatic price change when a termed subscription is renewed and the following applies:
     *
     * @remarks
     *
     * 1. AutomatedPriceChange setting is on
     * 2. Charge type is not one-time
     * 3. Charge model is not discount fixed amount
     *
     * Values:
     * - NoChange (default)
     * - SpecificPercentageValue
     * - UseLatestProductCatalogPricing
     *
     */
    priceChangeOption?: string;
    /**
     * Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Use this field if you set the `PriceChangeOption` value to `SpecificPercentageValue`.
     *
     * @remarks
     *
     * 1. AutomatedPriceChange setting is on
     * 2. Charge type is not one-time
     * 3. Charge model is not discount fixed amount
     *
     * Values: a decimal between -100 and 100
     *
     */
    priceIncreasePercentage?: string;
    /**
     * One or more price charge models with attributes that further describe the model.
     *
     * @remarks
     * Some attributes show as null values when not applicable.
     *
     */
    pricing?: GETProductRatePlanChargePricingType[];
    /**
     * A concise description of the charge model and pricing that is suitable to show to your customers. When the rate plan charge model is `Tiered` and multi-currency is enabled, this field includes an array of string of each currency, and each string of currency includes tier price description separated by comma.
     *
     * @remarks
     *
     * For the following charge models, the value of this field is an empty string:
     * - Multi-Attribute Pricing
     * - High Water Mark Tiered Pricing
     * - High Water Mark Volume Pricing
     * - Pre-Rated Per Unit Pricing
     * - Pre-Rated Pricing
     *
     * The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    pricingSummary?: string[];
    /**
     * Container for the application details about a discount product rate plan charge.
     *
     * @remarks
     *
     * Only discount product rate plan charges have values in this field.
     *
     */
    productDiscountApplyDetails?: GETProductDiscountApplyDetailsType[];
    /**
     * Specifies a rating group based on which usage records are rated.
     *
     * @remarks
     *
     * Possible values:
     *
     * - `ByBillingPeriod` (default): The rating is based on all the usages in a billing period.
     * - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date.
     * - `ByUsageRecord`: The rating is based on each usage record.
     * - `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).
     * - `ByGroupId`: The rating is based on all the usages in a custom group.
     *
     * **Note:**
     * - The `ByBillingPeriod` value can be applied for all charge models.
     * - The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models.
     * - The `ByGroupId` value is only available if you have the Active Rating feature enabled.
     * - Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.
     *
     */
    ratingGroup?: string;
    /**
     * Associates this product rate plan charge with a specific revenue recognition code. The value is a valid revenue recognition code.
     *
     * @remarks
     *
     */
    revRecCode?: string;
    /**
     * Specifies when revenue recognition begins.
     *
     * @remarks
     *
     */
    revRecTriggerCondition?: GETProductRatePlanChargeTypeRevRecTriggerConditionEnum;
    /**
     * The name of the revenue recognition rule governing the revenue schedule.
     *
     * @remarks
     *
     */
    revenueRecognitionRuleName?: string;
    /**
     * Specifies the smoothing model for an overage smoothing charge model or an tiered with overage model, which is an advanced type of a usage model that avoids spikes in usage charges. If a customer's usage spikes in a single period, then an overage smoothing model eases overage charges by considering usage and multiple periods.
     *
     * @remarks
     *
     * One of the following values shows which smoothing model will be applied to the charge when `Overage` or `Tiered with Overage` is used:
     *
     * - `RollingWindow` considers a number of periods to smooth usage. The rolling window starts and increments forward based on billing frequency. When allowed usage is met, then period resets and a new window begins.
     * - `Rollover` considers a fixed number of periods before calculating usage. The net balance at the end of a period is unused usage, which is carried over to the next period's balance.
     *
     */
    smoothingModel?: string;
    /**
     * When the billing period is set to `Specific` Months then this positive integer reflects the number of months for billing period charges.
     *
     * @remarks
     *
     */
    specificBillingPeriod?: number;
    /**
     * Specifies the tax code for taxation rules; used by Zuora Tax.
     *
     * @remarks
     *
     */
    taxCode?: string;
    /**
     * Specifies how to define taxation for the charge; used by Zuora Tax. Possible values are: `TaxExclusive`, `TaxInclusive`.
     *
     * @remarks
     *
     */
    taxMode?: string;
    /**
     * Specifies whether the charge is taxable; used by Zuora Tax. Possible values are:`true`, `false`.
     *
     * @remarks
     *
     */
    taxable?: boolean;
    /**
     * Specifies when to start billing the customer for the charge.
     *
     * @remarks
     *
     * Values: one of the following:
     * - `ContractEffective` is the date when the subscription's contract goes into effect and the charge is ready to be billed.
     * - `ServiceActivation` is the date when the services or products for a subscription have been activated and the customers have access.
     * - `CustomerAcceptance` is when the customer accepts the services or products for a subscription.
     * - `SpecificDate` is the date specified.
     *
     */
    triggerEvent?: string;
    /**
     * The type of charge. Possible values are: `OneTime`, `Recurring`, `Usage`.
     *
     * @remarks
     *
     */
    type?: string;
    /**
     * Describes the Units of Measure (uom) configured in **Settings > Billing** for the productRatePlanCharges.
     *
     * @remarks
     *
     * Values: `Each`, `License`, `Seat`, or `null`
     *
     */
    uom?: string;
    /**
     * Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.
     *
     * @remarks
     * If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.
     *
     */
    upToPeriods?: number;
    /**
     * The period type used to define when the charge ends.
     *
     * @remarks
     *
     * Values:
     * - Billing_Periods
     * - Days
     * - Weeks
     * - Months
     * - Years
     *
     *
     */
    upToPeriodsType?: string;
    /**
     * Determines how Zuora processes usage records for per-unit usage charges.
     *
     * @remarks
     *
     */
    usageRecordRatingOption?: string;
    /**
     * Determines whether to define a new accounting code for the new discount charge.
     *
     * @remarks
     * Values: `true`, `false`
     *
     */
    useDiscountSpecificAccountingCode?: boolean;
    /**
     * Shows the tenant-level percentage uplift value for an automatic price change to a termed subscription's renewal. You set the tenant uplift value in the web-based UI: **Settings > Billing > Define Default Subscription Settings**.
     *
     * @remarks
     *
     * Values: `true`, `false`
     *
     */
    useTenantDefaultForPriceChange?: boolean;
}
